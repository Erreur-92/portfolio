import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

public class VirtualKeyboard extends JFrame {
    private JButton[] buttons = new JButton[26]; // 26 lettres de A à Z
    private JPanel keyboardPanel;

    public VirtualKeyboard() {
        setTitle("Clavier Virtuel");
        setSize(400, 200);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        setLayout(new BorderLayout());

        // Crée un panneau avec un grid layout pour le clavier
        keyboardPanel = new JPanel();
        keyboardPanel.setLayout(new GridLayout(2, 13)); // 2 rangées, 13 colonnes pour les lettres A-Z
        add(keyboardPanel, BorderLayout.CENTER);

        // Crée les boutons pour chaque touche
        for (int i = 0; i < 26; i++) {
            buttons[i] = new JButton(String.valueOf((char) ('A' + i)));
            buttons[i].setFocusable(false); // Les boutons ne doivent pas être focusables
            buttons[i].setBackground(Color.LIGHT_GRAY);
            keyboardPanel.add(buttons[i]);
        }

        // Ajoute un KeyListener pour détecter les touches pressées
        addKeyListener(new KeyListener() {
            @Override
            public void keyTyped(KeyEvent e) {}

            @Override
            public void keyPressed(KeyEvent e) {
                char keyChar = e.getKeyChar();
                if (keyChar >= 'a' && keyChar <= 'z') {
                    int index = keyChar - 'a';
                    buttons[index].setBackground(Color.GRAY); // Griser la touche correspondante
                }
            }

            @Override
            public void keyReleased(KeyEvent e) {
                char keyChar = e.getKeyChar();
                if (keyChar >= 'a' && keyChar <= 'z') {
                    int index = keyChar - 'a';
                    buttons[index].setBackground(Color.LIGHT_GRAY); // Réinitialiser la couleur
                }
            }
        });

        setFocusable(true); // Assurez-vous que la fenêtre peut recevoir les événements de clavier
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            VirtualKeyboard frame = new VirtualKeyboard();
            frame.setVisible(true);
        });
    }
}