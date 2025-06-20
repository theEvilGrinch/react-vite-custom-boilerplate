function Aside({ position }) {
  const currentPosition = position === "left" ? "left" : "right"
  return (
    <aside className={`aside-${currentPosition}`}>
    <section>
      <h4>Aside <b>{currentPosition}</b></h4>
      <p>
        This is the content of the {currentPosition} sidebar section. It provides additional information and resources related to the main content of the page. The left aside can include links, images, or any other relevant content that enhances the user's experience.
      </p>
    </section>
  </aside>
  )
}

export default Aside