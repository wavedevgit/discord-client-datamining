package ie;

import android.text.TextUtils;
import app.rive.runtime.kotlin.fonts.Fonts;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.uimanager.ViewProps;
import java.util.ArrayList;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import ne.h0;
import ne.w0;
import ne.y;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class c {

    /* renamed from: c  reason: collision with root package name */
    private static final Pattern f28334c = Pattern.compile("\\[voice=\"([^\"]*)\"\\]");

    /* renamed from: d  reason: collision with root package name */
    private static final Pattern f28335d = Pattern.compile("^((?:[0-9]*\\.)?[0-9]+)(px|em|%)$");

    /* renamed from: a  reason: collision with root package name */
    private final h0 f28336a = new h0();

    /* renamed from: b  reason: collision with root package name */
    private final StringBuilder f28337b = new StringBuilder();

    private void a(d dVar, String str) {
        if (!"".equals(str)) {
            int indexOf = str.indexOf(91);
            if (indexOf != -1) {
                Matcher matcher = f28334c.matcher(str.substring(indexOf));
                if (matcher.matches()) {
                    dVar.z((String) ne.a.e(matcher.group(1)));
                }
                str = str.substring(0, indexOf);
            }
            String[] d12 = w0.d1(str, "\\.");
            String str2 = d12[0];
            int indexOf2 = str2.indexOf(35);
            if (indexOf2 != -1) {
                dVar.y(str2.substring(0, indexOf2));
                dVar.x(str2.substring(indexOf2 + 1));
            } else {
                dVar.y(str2);
            }
            if (d12.length > 1) {
                dVar.w((String[]) w0.Q0(d12, 1, d12.length));
            }
        }
    }

    private static boolean b(h0 h0Var) {
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        byte[] e10 = h0Var.e();
        if (f10 + 2 <= g10) {
            int i10 = f10 + 1;
            if (e10[f10] == 47) {
                int i11 = f10 + 2;
                if (e10[i10] != 42) {
                    return false;
                }
                while (true) {
                    int i12 = i11 + 1;
                    if (i12 < g10) {
                        if (((char) e10[i11]) == '*' && ((char) e10[i12]) == '/') {
                            i11 += 2;
                            g10 = i11;
                        } else {
                            i11 = i12;
                        }
                    } else {
                        h0Var.V(g10 - h0Var.f());
                        return true;
                    }
                }
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    private static boolean c(h0 h0Var) {
        char k10 = k(h0Var, h0Var.f());
        if (k10 != '\t' && k10 != '\n' && k10 != '\f' && k10 != '\r' && k10 != ' ') {
            return false;
        }
        h0Var.V(1);
        return true;
    }

    private static void e(String str, d dVar) {
        Matcher matcher = f28335d.matcher(ii.b.e(str));
        if (!matcher.matches()) {
            y.i("WebvttCssParser", "Invalid font-size: '" + str + "'.");
            return;
        }
        String str2 = (String) ne.a.e(matcher.group(2));
        str2.getClass();
        char c10 = 65535;
        switch (str2.hashCode()) {
            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                if (str2.equals("%")) {
                    c10 = 0;
                    break;
                }
                break;
            case 3240:
                if (str2.equals("em")) {
                    c10 = 1;
                    break;
                }
                break;
            case 3592:
                if (str2.equals("px")) {
                    c10 = 2;
                    break;
                }
                break;
        }
        switch (c10) {
            case 0:
                dVar.t(3);
                break;
            case 1:
                dVar.t(2);
                break;
            case 2:
                dVar.t(1);
                break;
            default:
                throw new IllegalStateException();
        }
        dVar.s(Float.parseFloat((String) ne.a.e(matcher.group(1))));
    }

    private static String f(h0 h0Var, StringBuilder sb2) {
        boolean z10 = false;
        sb2.setLength(0);
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        while (f10 < g10 && !z10) {
            char c10 = (char) h0Var.e()[f10];
            if ((c10 < 'A' || c10 > 'Z') && ((c10 < 'a' || c10 > 'z') && ((c10 < '0' || c10 > '9') && c10 != '#' && c10 != '-' && c10 != '.' && c10 != '_'))) {
                z10 = true;
            } else {
                f10++;
                sb2.append(c10);
            }
        }
        h0Var.V(f10 - h0Var.f());
        return sb2.toString();
    }

    static String g(h0 h0Var, StringBuilder sb2) {
        n(h0Var);
        if (h0Var.a() == 0) {
            return null;
        }
        String f10 = f(h0Var, sb2);
        if (!"".equals(f10)) {
            return f10;
        }
        return "" + ((char) h0Var.H());
    }

    private static String h(h0 h0Var, StringBuilder sb2) {
        StringBuilder sb3 = new StringBuilder();
        boolean z10 = false;
        while (!z10) {
            int f10 = h0Var.f();
            String g10 = g(h0Var, sb2);
            if (g10 == null) {
                return null;
            }
            if (!"}".equals(g10) && !";".equals(g10)) {
                sb3.append(g10);
            } else {
                h0Var.U(f10);
                z10 = true;
            }
        }
        return sb3.toString();
    }

    private static String i(h0 h0Var, StringBuilder sb2) {
        String str;
        n(h0Var);
        if (h0Var.a() < 5 || !"::cue".equals(h0Var.E(5))) {
            return null;
        }
        int f10 = h0Var.f();
        String g10 = g(h0Var, sb2);
        if (g10 == null) {
            return null;
        }
        if ("{".equals(g10)) {
            h0Var.U(f10);
            return "";
        }
        if ("(".equals(g10)) {
            str = l(h0Var);
        } else {
            str = null;
        }
        if (!")".equals(g(h0Var, sb2))) {
            return null;
        }
        return str;
    }

    private static void j(h0 h0Var, d dVar, StringBuilder sb2) {
        n(h0Var);
        String f10 = f(h0Var, sb2);
        if (!"".equals(f10) && ":".equals(g(h0Var, sb2))) {
            n(h0Var);
            String h10 = h(h0Var, sb2);
            if (h10 != null && !"".equals(h10)) {
                int f11 = h0Var.f();
                String g10 = g(h0Var, sb2);
                if (!";".equals(g10)) {
                    if ("}".equals(g10)) {
                        h0Var.U(f11);
                    } else {
                        return;
                    }
                }
                if (ViewProps.COLOR.equals(f10)) {
                    dVar.q(ne.g.b(h10));
                } else if ("background-color".equals(f10)) {
                    dVar.n(ne.g.b(h10));
                } else {
                    boolean z10 = true;
                    if ("ruby-position".equals(f10)) {
                        if ("over".equals(h10)) {
                            dVar.v(1);
                        } else if ("under".equals(h10)) {
                            dVar.v(2);
                        }
                    } else if ("text-combine-upright".equals(f10)) {
                        if (!"all".equals(h10) && !h10.startsWith("digits")) {
                            z10 = false;
                        }
                        dVar.p(z10);
                    } else if ("text-decoration".equals(f10)) {
                        if ("underline".equals(h10)) {
                            dVar.A(true);
                        }
                    } else if ("font-family".equals(f10)) {
                        dVar.r(h10);
                    } else if ("font-weight".equals(f10)) {
                        if ("bold".equals(h10)) {
                            dVar.o(true);
                        }
                    } else if ("font-style".equals(f10)) {
                        if (Fonts.Font.STYLE_ITALIC.equals(h10)) {
                            dVar.u(true);
                        }
                    } else if ("font-size".equals(f10)) {
                        e(h10, dVar);
                    }
                }
            }
        }
    }

    private static char k(h0 h0Var, int i10) {
        return (char) h0Var.e()[i10];
    }

    private static String l(h0 h0Var) {
        int f10 = h0Var.f();
        int g10 = h0Var.g();
        boolean z10 = false;
        while (f10 < g10 && !z10) {
            int i10 = f10 + 1;
            if (((char) h0Var.e()[f10]) == ')') {
                z10 = true;
            } else {
                z10 = false;
            }
            f10 = i10;
        }
        return h0Var.E((f10 - 1) - h0Var.f()).trim();
    }

    static void m(h0 h0Var) {
        do {
        } while (!TextUtils.isEmpty(h0Var.s()));
    }

    static void n(h0 h0Var) {
        while (true) {
            for (boolean z10 = true; h0Var.a() > 0 && z10; z10 = false) {
                if (!c(h0Var) && !b(h0Var)) {
                }
            }
            return;
        }
    }

    public List d(h0 h0Var) {
        boolean z10;
        this.f28337b.setLength(0);
        int f10 = h0Var.f();
        m(h0Var);
        this.f28336a.S(h0Var.e(), h0Var.f());
        this.f28336a.U(f10);
        ArrayList arrayList = new ArrayList();
        while (true) {
            String i10 = i(this.f28336a, this.f28337b);
            if (i10 == null || !"{".equals(g(this.f28336a, this.f28337b))) {
                break;
            }
            d dVar = new d();
            a(dVar, i10);
            String str = null;
            boolean z11 = false;
            while (!z11) {
                int f11 = this.f28336a.f();
                String g10 = g(this.f28336a, this.f28337b);
                if (g10 != null && !"}".equals(g10)) {
                    z10 = false;
                } else {
                    z10 = true;
                }
                if (!z10) {
                    this.f28336a.U(f11);
                    j(this.f28336a, dVar, this.f28337b);
                }
                str = g10;
                z11 = z10;
            }
            if ("}".equals(str)) {
                arrayList.add(dVar);
            }
        }
        return arrayList;
    }
}
