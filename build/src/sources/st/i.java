package st;

import java.text.DecimalFormatSymbols;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public interface i {

    /* renamed from: a  reason: collision with root package name */
    public static final i f50169a = new a();

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static class a implements i {
        a() {
        }

        private DecimalFormatSymbols g(Locale locale) {
            return DecimalFormatSymbols.getInstance(locale);
        }

        @Override // st.i
        public Locale[] a() {
            return DecimalFormatSymbols.getAvailableLocales();
        }

        @Override // st.i
        public char b(Locale locale) {
            return g(locale).getDecimalSeparator();
        }

        @Override // st.i
        public String c(Locale locale) {
            if (locale.getLanguage().equals("ar")) {
                return "\u200f+";
            }
            return String.valueOf('+');
        }

        @Override // st.i
        public j d(Locale locale) {
            return j.f50170d;
        }

        @Override // st.i
        public String e(Locale locale) {
            if (locale.getLanguage().equals("ar")) {
                return "\u200f-";
            }
            return String.valueOf(g(locale).getMinusSign());
        }

        @Override // st.i
        public char f(Locale locale) {
            return g(locale).getZeroDigit();
        }
    }

    Locale[] a();

    char b(Locale locale);

    String c(Locale locale);

    j d(Locale locale);

    String e(Locale locale);

    char f(Locale locale);
}
