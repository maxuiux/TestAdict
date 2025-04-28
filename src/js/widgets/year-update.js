const updateYear = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()

    document.getElementById('year').textContent = currentYear
}

window.addEventListener('load', updateYear)
