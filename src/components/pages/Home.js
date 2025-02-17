import { Box, Typography, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import About from "./About";
import ProjectsPage from "./Certificates";
import Contact from "./Contact";
import { useState } from "react";
import ProjectDesc from "./ProjectDesc";
import ProjectOverview from "./ProjectOverview";
import Courses from "./Courses";
import Experience from "./Experience";
import { useColorContext } from "../context/ColorContext";

const Home = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [selectedProject, setSelectedProject] = useState(null);

  const { color, setColor } = useColorContext()
  const [selectedColor, setSelectedColor] = useState(color); // Store user selection


  const smallerScreen = useMediaQuery("(max-width: 1200px)");
  const mobileScreen = useMediaQuery("(max-width: 600px)")


  const handleConfirm = () => {
    setColor(selectedColor); // Update global color
  };



  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <About color={color} />;
      case "projects":
        return <ProjectsPage color={color} setSelectedProject={setSelectedProject} />;
      case "contact":
        return <Contact color={color} />;
      case 'courses':
        return <Courses color={color} />
      case 'experience':
        return <Experience color={color} setSelectedProject={setSelectedProject} />
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: smallerScreen ? "column" : "row", // Stack on small screens
        width: smallerScreen ? '95%' : "80%",
        margin: "auto",
        mt: 5,
        mb: 5,
        gap: "50px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Sidebar */}
      <Box
        sx={{
          width: smallerScreen ? "100%" : "350px", // Full width when stacked
          position: smallerScreen ? "static" : "fixed", // Fixed on large screens, static on small
          height: smallerScreen ? "auto" : "100vh", // Auto height when stacked
          overflow: "hidden",
        }}
      >
        {selectedProject ? (
          <ProjectDesc color={color} project={selectedProject} setSelectedProject={setSelectedProject} />
        ) : (
          <Sidebar color={color} setColor={setColor} selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        )}
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flexGrow: 1,
          ml: smallerScreen ? "0px" : "375px", // Remove left margin when stacked
          p: 0,
          borderRadius: "20px",
          boxShadow: 2,
          background: "#1e1e20",
          border: "1px solid #383838",
        }}
      >
        {selectedProject ? (
          <ProjectOverview color={color} project={selectedProject} setSelectedProject={setSelectedProject} />
        ) : (
          <Box sx={{ position: "relative", p: 5 }}>
            <Typography fontWeight={800} fontSize={"32px"} sx={{ marginBottom: "16px", mt: mobileScreen ? 3 : 0 }}>
              {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
            </Typography>

            {/* Active Section Indicator */}
            <Box sx={{ mt: 2, height: "10px", width: "60px", borderRadius: "40px", background: color }}></Box>

            {/* Navbar at the top-right */}
            <Box
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                height: 40,
                borderTopRightRadius:  20,
                borderBottomLeftRadius: mobileScreen ? 0 : 20,
                borderTopLeftRadius: mobileScreen ? 20 : 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid #383838",
                gap: 3,
                p: 3,
                background: "#FFFFFF29",
                width: mobileScreen ? "100%" : "auto", // Responsive width
                maxWidth: "100%", // Prevent overflow issues
                overflowY:'scroll'
              }}
            >
              {["about", "projects", "experience", "courses", "contact"].map((section) => (
                <Typography
                variant="subtitle2"
                  key={section}
                  sx={{
                    cursor: "pointer",
                    fontWeight: activeSection === section ? 800 : 400,
                    color: activeSection === section ? color : "",
                  }}
                  onClick={() => setActiveSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
              ))}
            </Box>

            {/* Render the Active Section */}
            <Box>{renderSection(activeSection)}</Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Home;
