      // 1. Демо
        document.getElementById('demoBtn').addEventListener('click', function() {
            const name = prompt("Привіт! Як тебе звати?", "Друже");
            if (name) {
                const isReady = confirm(`${name}, ти готовий вчити JS?`);
                if (isReady) alert("Супер! Тоді поїхали! 🚀");
                else alert("Нічого, відпочинь 😉");
            }
        });

        // 2. Меню
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".sidebar a");
        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                if (scrollY >= section.offsetTop - 200) current = section.getAttribute("id");
            });
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href").includes(current)) link.classList.add("active");
            });
        });

        // 3. Тест (UPDATED)
        function checkQuiz() {
            const answers = { 
                q1: 'b', 
                q2: 'b', 
                q3: 'b',
                q4: 'a', // userName
                q5: 'b', // String
                q6: 'a', // else
                q7: 'b'  // 1
            };
            let score = 0;
            const total = Object.keys(answers).length;
            const resultDiv = document.getElementById('quiz-result');
            const form = document.getElementById('quizForm');

            document.querySelectorAll('.question-block').forEach(b => {
                b.style.borderLeft = "none";
                b.style.backgroundColor = "#fff";
            });

            for (let q in answers) {
                const selected = form.elements[q].value;
                const block = document.getElementById(q + '-block');
                if (selected === answers[q]) {
                    score++;
                    block.style.borderLeft = "5px solid var(--success-color)";
                } else {
                    block.style.borderLeft = "5px solid var(--error-color)";
                }
            }
            resultDiv.style.display = "block";
            if (score === total) {
                resultDiv.style.color = "var(--success-color)";
                resultDiv.innerHTML = `🎉 Ідеально! ${score} з ${total}`;
            } else {
                resultDiv.innerHTML = `Результат: ${score} з ${total}`;
            }
        }

        // 4. Задачі
        function toggleSolution(id) {
            document.getElementById(id).classList.toggle('visible');
        }
        function runTask1() { alert(`15000 * 12 = ${15000*12}`); }
        function runTask2() { alert(`24 години = ${24*60} хв = ${24*3600} сек`); }
        function runTask3() { 
            const a = prompt("Вік?"); 
            if(a) alert(Number(a)>=18 ? "Welcome" : "Go home"); 
        }
