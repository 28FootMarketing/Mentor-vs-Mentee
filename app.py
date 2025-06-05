import streamlit as st

st.set_page_config(page_title="Mentor vs. Mentee Agents", layout="centered")

st.title("👥 Mentor vs. Mentee Agent Suite")
st.markdown("""
Welcome to your interactive learning experience with **Facilitate The Process**.  
Meet your AI agents—each designed to support different parts of your mentorship journey, from onboarding to triage support.
""")

st.divider()

# Marcus
st.subheader("🧭 Marcus – The Journey Architect")
st.markdown("""
**Acronym:** M.A.R.C.U.S.  
**Meaning:** Mentorship, Assessment, Role Identification, Curriculum Setup, User Onboarding, Strategy Tracking  
**Role:** Marcus guides your entry, identifies your role (mentor or mentee), and builds your personalized learning path.
""")

# Aisha
st.subheader("🎯 Aisha – The Question Coach")
st.markdown("""
**Acronym:** A.I.S.H.A.  
**Meaning:** Asking with Intent Strategically Helps Advancement  
**Role:** Aisha helps you get clear on what you are asking, using NEPQ-style prompts to improve mentor-mentee communication.
""")

# Bryce
st.subheader("🧩 Bryce – The Relationship Translator")
st.markdown("""
**Acronym:** B.R.Y.C.E.  
**Meaning:** Building Respectful Youth–Coach Connection & Empathy  
**Role:** Bryce supports respectful, DEI-aware communication between mentors and mentees.
""")

# Leila
st.subheader("📘 Leila – The Progress Tracker")
st.markdown("""
**Acronym:** L.E.I.L.A.  
**Meaning:** Learning Engagement Initiator for Login-based Accountability  
**Role:** Leila tracks progress, keeps learners on pace, and delivers smart nudges when needed.
""")

# Ebony
st.subheader("🩺 Ebony – The Mentorship Triage Coordinator")
st.markdown("""
**Acronym:** E.B.O.N.Y.  
**Meaning:** Evaluation Based on Observed Needs and Yield  
**Role:** Ebony steps in when things feel off. She triages breakdowns in communication, motivation, or clarity and reroutes users back to the right module or agent to regain momentum.
""")

st.divider()
st.info("Each agent is here to support your growth. Ready to begin? Let Marcus guide your first step.")
