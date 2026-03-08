import { Document, Page, Text, View, StyleSheet, Image } from "@react-pdf/renderer"

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: "Helvetica"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },

  headerLeft: {
    width: "75%"
  },

  name: {
    fontSize: 24,
    fontWeight: "bold"
  },

  role: {
    fontSize: 12,
    color: "grey",
    marginBottom: 6
  },

  contact: {
    fontSize: 10,
    color: "grey",
    lineHeight: 1.5
  },

  photo: {
    width: 100,
    height: 100,
    borderRadius:50 
  },

  section: {
    marginTop: 15
  },

  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    paddingBottom: 3
  },

  paragraph: {
    fontSize: 10,
    lineHeight: 1.6
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  column: {
    width: "48%"
  },

  jobTitle: {
    fontSize: 11,
    fontWeight: "bold"
  },

  jobSub: {
    fontSize: 9,
    color: "grey",
    marginBottom: 4
  },

  bullet: {
    fontSize: 10,
    marginLeft: 10,
    marginBottom: 2
  }
})

export const CVDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>

      {/* ===== HEADER ===== */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.name}>Muhammad Naufal Almuhyidin</Text>
          <Text style={styles.role}>AI Engineer • Fullstack Developer</Text>
          <Text style={styles.contact}>
            Email: naufal@email.com{"\n"}
            Phone: +62 815-7363-5413{"\n"}
            GitHub: https://github.com/MUHAMAD-NAUFAL-666{"\n"}
            Location: Karawang, Indonesia
          </Text>
        </View>

        <Image
          style={styles.photo}
          src="/assets/lanyard/owner.jpeg"
        />
      </View>

      {/* ===== SUMMARY ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Professional Summary</Text>
        <Text style={styles.paragraph}>
          Passionate Fullstack Developer with strong expertise in building scalable
          web applications using Laravel and React. Experienced in system design,
          authentication architecture, REST API development, and AI-powered digital
          systems. Focused on writing clean, maintainable, and high-performance code.
        </Text>
      </View>

      {/* ===== SKILLS ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        <View style={styles.row}>
          <View style={styles.column}>
            <Text style={styles.bullet}>• Laravel</Text>
            <Text style={styles.bullet}>• React / Vite</Text>
            <Text style={styles.bullet}>• TypeScript</Text>
            <Text style={styles.bullet}>• REST API</Text>
          </View>
          <View style={styles.column}>
            <Text style={styles.bullet}>• MySQL</Text>
            <Text style={styles.bullet}>• TailwindCSS</Text>
            <Text style={styles.bullet}>• Git & GitHub</Text>
            <Text style={styles.bullet}>• System Design</Text>
          </View>
        </View>
      </View>

      {/* ===== EXPERIENCE ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>

        <Text style={styles.jobTitle}>Fullstack Developer — Freelance</Text>
        <Text style={styles.jobSub}>2022 - Present</Text>
        <Text style={styles.bullet}>
          • Developed rental management system with role-based authentication.
        </Text>
        <Text style={styles.bullet}>
          • Built admin dashboard with analytics and reporting.
        </Text>
        <Text style={styles.bullet}>
          • Integrated WhatsApp API for automated notifications.
        </Text>
      </View>

      {/* ===== PROJECTS ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>

        <Text style={styles.jobTitle}>Rental Management System</Text>
        <Text style={styles.bullet}>
          • Web-based phone & laptop rental platform using Laravel & React.
        </Text>

        <Text style={[styles.jobTitle, { marginTop: 6 }]}>
          QR Attendance System
        </Text>
        <Text style={styles.bullet}>
          • Built QR-based student attendance system with real-time dashboard.
        </Text>
      </View>

      {/* ===== EDUCATION ===== */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.jobTitle}>Information Technology</Text>
        <Text style={styles.jobSub}>2022 - Present</Text>
      </View>

    </Page>
  </Document>
)