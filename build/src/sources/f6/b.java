package f6;

import android.util.Log;
import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.facebook.react.devsupport.StackTraceHelper;
import f6.g;
import f6.k;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private f f23196a;

    /* renamed from: b  reason: collision with root package name */
    private u f23197b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f23198c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f23199a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f23200b;

        static {
            int[] iArr = new int[j.values().length];
            f23200b = iArr;
            try {
                iArr[j.first_child.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f23200b[j.last_child.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f23200b[j.only_child.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f23200b[j.first_of_type.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f23200b[j.last_of_type.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f23200b[j.only_of_type.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f23200b[j.root.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
            try {
                f23200b[j.empty.ordinal()] = 8;
            } catch (NoSuchFieldError unused8) {
            }
            try {
                f23200b[j.nth_child.ordinal()] = 9;
            } catch (NoSuchFieldError unused9) {
            }
            try {
                f23200b[j.nth_last_child.ordinal()] = 10;
            } catch (NoSuchFieldError unused10) {
            }
            try {
                f23200b[j.nth_of_type.ordinal()] = 11;
            } catch (NoSuchFieldError unused11) {
            }
            try {
                f23200b[j.nth_last_of_type.ordinal()] = 12;
            } catch (NoSuchFieldError unused12) {
            }
            try {
                f23200b[j.not.ordinal()] = 13;
            } catch (NoSuchFieldError unused13) {
            }
            try {
                f23200b[j.target.ordinal()] = 14;
            } catch (NoSuchFieldError unused14) {
            }
            try {
                f23200b[j.lang.ordinal()] = 15;
            } catch (NoSuchFieldError unused15) {
            }
            try {
                f23200b[j.link.ordinal()] = 16;
            } catch (NoSuchFieldError unused16) {
            }
            try {
                f23200b[j.visited.ordinal()] = 17;
            } catch (NoSuchFieldError unused17) {
            }
            try {
                f23200b[j.hover.ordinal()] = 18;
            } catch (NoSuchFieldError unused18) {
            }
            try {
                f23200b[j.active.ordinal()] = 19;
            } catch (NoSuchFieldError unused19) {
            }
            try {
                f23200b[j.focus.ordinal()] = 20;
            } catch (NoSuchFieldError unused20) {
            }
            try {
                f23200b[j.enabled.ordinal()] = 21;
            } catch (NoSuchFieldError unused21) {
            }
            try {
                f23200b[j.disabled.ordinal()] = 22;
            } catch (NoSuchFieldError unused22) {
            }
            try {
                f23200b[j.checked.ordinal()] = 23;
            } catch (NoSuchFieldError unused23) {
            }
            try {
                f23200b[j.indeterminate.ordinal()] = 24;
            } catch (NoSuchFieldError unused24) {
            }
            int[] iArr2 = new int[c.values().length];
            f23199a = iArr2;
            try {
                iArr2[c.EQUALS.ordinal()] = 1;
            } catch (NoSuchFieldError unused25) {
            }
            try {
                f23199a[c.INCLUDES.ordinal()] = 2;
            } catch (NoSuchFieldError unused26) {
            }
            try {
                f23199a[c.DASHMATCH.ordinal()] = 3;
            } catch (NoSuchFieldError unused27) {
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* renamed from: f6.b$b  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class C0309b {

        /* renamed from: a  reason: collision with root package name */
        public final String f23201a;

        /* renamed from: b  reason: collision with root package name */
        final c f23202b;

        /* renamed from: c  reason: collision with root package name */
        public final String f23203c;

        C0309b(String str, c cVar, String str2) {
            this.f23201a = str;
            this.f23202b = cVar;
            this.f23203c = str2;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        EXISTS,
        EQUALS,
        INCLUDES,
        DASHMATCH
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class d extends k.i {

        /* JADX INFO: Access modifiers changed from: private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
        public static class a {

            /* renamed from: a  reason: collision with root package name */
            public int f23209a;

            /* renamed from: b  reason: collision with root package name */
            public int f23210b;

            a(int i10, int i11) {
                this.f23209a = i10;
                this.f23210b = i11;
            }
        }

        d(String str) {
            super(str.replaceAll("(?s)/\\*.*?\\*/", ""));
        }

        private int C(int i10) {
            if (i10 >= 48 && i10 <= 57) {
                return i10 - 48;
            }
            if (i10 >= 65 && i10 <= 70) {
                return i10 - 55;
            }
            if (i10 >= 97 && i10 <= 102) {
                return i10 - 87;
            }
            return -1;
        }

        private a D() {
            int i10;
            f6.c cVar;
            int d10;
            a aVar;
            if (h()) {
                return null;
            }
            int i11 = this.f23631b;
            if (!f('(')) {
                return null;
            }
            A();
            int i12 = 1;
            if (g("odd")) {
                aVar = new a(2, 1);
            } else {
                int i13 = 0;
                if (g("even")) {
                    aVar = new a(2, 0);
                } else {
                    if (!f('+') && f('-')) {
                        i10 = -1;
                    } else {
                        i10 = 1;
                    }
                    f6.c c10 = f6.c.c(this.f23630a, this.f23631b, this.f23632c, false);
                    if (c10 != null) {
                        this.f23631b = c10.a();
                    }
                    if (!f('n') && !f('N')) {
                        cVar = c10;
                        c10 = null;
                    } else {
                        if (c10 == null) {
                            c10 = new f6.c(1L, this.f23631b);
                        }
                        A();
                        boolean f10 = f('+');
                        if (!f10 && (f10 = f('-'))) {
                            i12 = -1;
                        }
                        if (f10) {
                            A();
                            cVar = f6.c.c(this.f23630a, this.f23631b, this.f23632c, false);
                            if (cVar != null) {
                                this.f23631b = cVar.a();
                                int i14 = i12;
                                i12 = i10;
                                i10 = i14;
                            } else {
                                this.f23631b = i11;
                                return null;
                            }
                        } else {
                            int i15 = i12;
                            i12 = i10;
                            i10 = i15;
                            cVar = null;
                        }
                    }
                    if (c10 == null) {
                        d10 = 0;
                    } else {
                        d10 = i12 * c10.d();
                    }
                    if (cVar != null) {
                        i13 = i10 * cVar.d();
                    }
                    aVar = new a(d10, i13);
                }
            }
            A();
            if (f(')')) {
                return aVar;
            }
            this.f23631b = i11;
            return null;
        }

        private String E() {
            if (h()) {
                return null;
            }
            String q10 = q();
            if (q10 != null) {
                return q10;
            }
            return H();
        }

        private List G() {
            if (h()) {
                return null;
            }
            int i10 = this.f23631b;
            if (!f('(')) {
                return null;
            }
            A();
            ArrayList arrayList = null;
            do {
                String H = H();
                if (H == null) {
                    this.f23631b = i10;
                    return null;
                }
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(H);
                A();
            } while (z());
            if (f(')')) {
                return arrayList;
            }
            this.f23631b = i10;
            return null;
        }

        private List K() {
            List list;
            List<g> list2;
            if (h()) {
                return null;
            }
            int i10 = this.f23631b;
            if (!f('(')) {
                return null;
            }
            A();
            List L = L();
            if (L == null) {
                this.f23631b = i10;
                return null;
            } else if (!f(')')) {
                this.f23631b = i10;
                return null;
            } else {
                Iterator it = L.iterator();
                while (it.hasNext() && (list = ((s) it.next()).f23256a) != null) {
                    Iterator it2 = list.iterator();
                    while (it2.hasNext() && (list2 = ((t) it2.next()).f23261d) != null) {
                        for (g gVar : list2) {
                            if (gVar instanceof k) {
                                return null;
                            }
                        }
                    }
                }
                return L;
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public List L() {
            if (h()) {
                return null;
            }
            ArrayList arrayList = new ArrayList(1);
            s sVar = new s(null);
            while (!h() && M(sVar)) {
                if (z()) {
                    arrayList.add(sVar);
                    sVar = new s(null);
                }
            }
            if (!sVar.f()) {
                arrayList.add(sVar);
            }
            return arrayList;
        }

        /* JADX WARN: Multi-variable type inference failed */
        private void O(s sVar, t tVar) {
            g gVar;
            h hVar;
            boolean z10;
            boolean z11;
            h hVar2;
            String H = H();
            if (H != null) {
                j a10 = j.a(H);
                switch (a.f23200b[a10.ordinal()]) {
                    case 1:
                        h hVar3 = new h(0, 1, true, false, null);
                        sVar.b();
                        hVar2 = hVar3;
                        gVar = hVar2;
                        break;
                    case 2:
                        h hVar4 = new h(0, 1, false, false, null);
                        sVar.b();
                        gVar = hVar4;
                        break;
                    case 3:
                        gVar = new m(false, null);
                        sVar.b();
                        break;
                    case 4:
                        hVar = new h(0, 1, true, true, tVar.f23259b);
                        sVar.b();
                        gVar = hVar;
                        break;
                    case 5:
                        h hVar5 = new h(0, 1, false, true, tVar.f23259b);
                        sVar.b();
                        gVar = hVar5;
                        break;
                    case 6:
                        gVar = new m(true, tVar.f23259b);
                        sVar.b();
                        break;
                    case 7:
                        gVar = new n(null);
                        sVar.b();
                        break;
                    case 8:
                        gVar = new i(null);
                        sVar.b();
                        break;
                    case 9:
                    case 10:
                    case 11:
                    case 12:
                        if (a10 != j.nth_child && a10 != j.nth_of_type) {
                            z10 = false;
                        } else {
                            z10 = true;
                        }
                        if (a10 != j.nth_of_type && a10 != j.nth_last_of_type) {
                            z11 = false;
                        } else {
                            z11 = true;
                        }
                        a D = D();
                        if (D != null) {
                            hVar = new h(D.f23209a, D.f23210b, z10, z11, tVar.f23259b);
                            sVar.b();
                            gVar = hVar;
                            break;
                        } else {
                            throw new f6.a("Invalid or missing parameter section for pseudo class: " + H);
                        }
                    case 13:
                        List K = K();
                        if (K != null) {
                            k kVar = new k(K);
                            sVar.f23257b = kVar.b();
                            hVar2 = kVar;
                            gVar = hVar2;
                            break;
                        } else {
                            throw new f6.a("Invalid or missing parameter section for pseudo class: " + H);
                        }
                    case 14:
                        gVar = new o(null);
                        sVar.b();
                        break;
                    case 15:
                        G();
                        gVar = new l(H);
                        sVar.b();
                        break;
                    case 16:
                    case 17:
                    case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    case 20:
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    case 23:
                    case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                        gVar = new l(H);
                        sVar.b();
                        break;
                    default:
                        throw new f6.a("Unsupported pseudo class: " + H);
                }
                tVar.b(gVar);
                return;
            }
            throw new f6.a("Invalid pseudo class");
        }

        private int P() {
            int i10;
            if (h()) {
                return this.f23631b;
            }
            int i11 = this.f23631b;
            int charAt = this.f23630a.charAt(i11);
            if (charAt == 45) {
                charAt = a();
            }
            if ((charAt >= 65 && charAt <= 90) || ((charAt >= 97 && charAt <= 122) || charAt == 95)) {
                int a10 = a();
                while (true) {
                    if ((a10 < 65 || a10 > 90) && ((a10 < 97 || a10 > 122) && !((a10 >= 48 && a10 <= 57) || a10 == 45 || a10 == 95))) {
                        break;
                    }
                    a10 = a();
                }
                i10 = this.f23631b;
            } else {
                i10 = i11;
            }
            this.f23631b = i11;
            return i10;
        }

        String F() {
            int C;
            if (h()) {
                return null;
            }
            char charAt = this.f23630a.charAt(this.f23631b);
            if (charAt != '\'' && charAt != '\"') {
                return null;
            }
            StringBuilder sb2 = new StringBuilder();
            this.f23631b++;
            int intValue = l().intValue();
            while (intValue != -1 && intValue != charAt) {
                if (intValue == 92) {
                    intValue = l().intValue();
                    if (intValue != -1) {
                        if (intValue != 10 && intValue != 13 && intValue != 12) {
                            int C2 = C(intValue);
                            if (C2 != -1) {
                                for (int i10 = 1; i10 <= 5 && (C = C((intValue = l().intValue()))) != -1; i10++) {
                                    C2 = (C2 * 16) + C;
                                }
                                sb2.append((char) C2);
                            }
                        } else {
                            intValue = l().intValue();
                        }
                    }
                }
                sb2.append((char) intValue);
                intValue = l().intValue();
            }
            return sb2.toString();
        }

        String H() {
            int P = P();
            int i10 = this.f23631b;
            if (P == i10) {
                return null;
            }
            String substring = this.f23630a.substring(i10, P);
            this.f23631b = P;
            return substring;
        }

        String I() {
            char charAt;
            int C;
            StringBuilder sb2 = new StringBuilder();
            while (!h() && (charAt = this.f23630a.charAt(this.f23631b)) != '\'' && charAt != '\"' && charAt != '(' && charAt != ')' && !k(charAt) && !Character.isISOControl((int) charAt)) {
                this.f23631b++;
                if (charAt == '\\') {
                    if (!h()) {
                        String str = this.f23630a;
                        int i10 = this.f23631b;
                        this.f23631b = i10 + 1;
                        charAt = str.charAt(i10);
                        if (charAt != '\n' && charAt != '\r' && charAt != '\f') {
                            int C2 = C(charAt);
                            if (C2 != -1) {
                                for (int i11 = 1; i11 <= 5 && !h() && (C = C(this.f23630a.charAt(this.f23631b))) != -1; i11++) {
                                    this.f23631b++;
                                    C2 = (C2 * 16) + C;
                                }
                                sb2.append((char) C2);
                            }
                        }
                    }
                }
                sb2.append(charAt);
            }
            if (sb2.length() == 0) {
                return null;
            }
            return sb2.toString();
        }

        String J() {
            if (h()) {
                return null;
            }
            int i10 = this.f23631b;
            int charAt = this.f23630a.charAt(i10);
            int i11 = i10;
            while (charAt != -1 && charAt != 59 && charAt != 125 && charAt != 33 && !j(charAt)) {
                if (!k(charAt)) {
                    i11 = this.f23631b + 1;
                }
                charAt = a();
            }
            if (this.f23631b > i10) {
                return this.f23630a.substring(i10, i11);
            }
            this.f23631b = i10;
            return null;
        }

        /* JADX WARN: Removed duplicated region for block: B:16:0x0036  */
        /* JADX WARN: Removed duplicated region for block: B:17:0x003c  */
        /* JADX WARN: Removed duplicated region for block: B:23:0x0053  */
        /* JADX WARN: Removed duplicated region for block: B:79:0x012e  */
        /* JADX WARN: Removed duplicated region for block: B:81:0x0133  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        boolean M(f6.b.s r11) {
            /*
                Method dump skipped, instructions count: 310
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: f6.b.d.M(f6.b$s):boolean");
        }

        String N() {
            if (h()) {
                return null;
            }
            int i10 = this.f23631b;
            if (!g("url(")) {
                return null;
            }
            A();
            String F = F();
            if (F == null) {
                F = I();
            }
            if (F == null) {
                this.f23631b = i10;
                return null;
            }
            A();
            if (!h() && !g(")")) {
                this.f23631b = i10;
                return null;
            }
            return F;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum e {
        DESCENDANT,
        CHILD,
        FOLLOWS
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum f {
        all,
        aural,
        braille,
        embossed,
        handheld,
        print,
        projection,
        screen,
        speech,
        tty,
        tv
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public interface g {
        boolean a(q qVar, g.l0 l0Var);
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class h implements g {

        /* renamed from: a  reason: collision with root package name */
        private int f23227a;

        /* renamed from: b  reason: collision with root package name */
        private int f23228b;

        /* renamed from: c  reason: collision with root package name */
        private boolean f23229c;

        /* renamed from: d  reason: collision with root package name */
        private boolean f23230d;

        /* renamed from: e  reason: collision with root package name */
        private String f23231e;

        h(int i10, int i11, boolean z10, boolean z11, String str) {
            this.f23227a = i10;
            this.f23228b = i11;
            this.f23229c = z10;
            this.f23230d = z11;
            this.f23231e = str;
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            String str;
            int i10;
            int i11;
            int i12;
            if (this.f23230d && this.f23231e == null) {
                str = l0Var.n();
            } else {
                str = this.f23231e;
            }
            g.j0 j0Var = l0Var.f23445b;
            if (j0Var != null) {
                i10 = 0;
                i11 = 0;
                for (g.n0 n0Var : j0Var.getChildren()) {
                    g.l0 l0Var2 = (g.l0) n0Var;
                    if (l0Var2 == l0Var) {
                        i10 = i11;
                    }
                    if (str == null || l0Var2.n().equals(str)) {
                        i11++;
                    }
                }
            } else {
                i10 = 0;
                i11 = 1;
            }
            if (this.f23229c) {
                i12 = i10 + 1;
            } else {
                i12 = i11 - i10;
            }
            int i13 = this.f23227a;
            if (i13 == 0) {
                if (i12 != this.f23228b) {
                    return false;
                }
                return true;
            }
            int i14 = this.f23228b;
            if ((i12 - i14) % i13 != 0 || (Integer.signum(i12 - i14) != 0 && Integer.signum(i12 - this.f23228b) != Integer.signum(this.f23227a))) {
                return false;
            }
            return true;
        }

        public String toString() {
            String str;
            if (this.f23229c) {
                str = "";
            } else {
                str = "last-";
            }
            if (this.f23230d) {
                return String.format("nth-%schild(%dn%+d of type <%s>)", str, Integer.valueOf(this.f23227a), Integer.valueOf(this.f23228b), this.f23231e);
            }
            return String.format("nth-%schild(%dn%+d)", str, Integer.valueOf(this.f23227a), Integer.valueOf(this.f23228b));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class i implements g {
        private i() {
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            if (!(l0Var instanceof g.j0) || ((g.j0) l0Var).getChildren().size() == 0) {
                return true;
            }
            return false;
        }

        public String toString() {
            return "empty";
        }

        /* synthetic */ i(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum j {
        target,
        root,
        nth_child,
        nth_last_child,
        nth_of_type,
        nth_last_of_type,
        first_child,
        last_child,
        first_of_type,
        last_of_type,
        only_child,
        only_of_type,
        empty,
        not,
        lang,
        link,
        visited,
        hover,
        active,
        focus,
        enabled,
        disabled,
        checked,
        indeterminate,
        UNSUPPORTED;
        
        private static final Map K = new HashMap();

        static {
            j[] values;
            for (j jVar : values()) {
                if (jVar != UNSUPPORTED) {
                    K.put(jVar.name().replace('_', '-'), jVar);
                }
            }
        }

        public static j a(String str) {
            j jVar = (j) K.get(str);
            if (jVar != null) {
                return jVar;
            }
            return UNSUPPORTED;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class k implements g {

        /* renamed from: a  reason: collision with root package name */
        private List f23247a;

        k(List list) {
            this.f23247a = list;
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            for (s sVar : this.f23247a) {
                if (b.l(qVar, sVar, l0Var)) {
                    return false;
                }
            }
            return true;
        }

        int b() {
            int i10 = Integer.MIN_VALUE;
            for (s sVar : this.f23247a) {
                int i11 = sVar.f23257b;
                if (i11 > i10) {
                    i10 = i11;
                }
            }
            return i10;
        }

        public String toString() {
            return "not(" + this.f23247a + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class l implements g {

        /* renamed from: a  reason: collision with root package name */
        private String f23248a;

        l(String str) {
            this.f23248a = str;
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            return false;
        }

        public String toString() {
            return this.f23248a;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class m implements g {

        /* renamed from: a  reason: collision with root package name */
        private boolean f23249a;

        /* renamed from: b  reason: collision with root package name */
        private String f23250b;

        public m(boolean z10, String str) {
            this.f23249a = z10;
            this.f23250b = str;
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            String str;
            int i10;
            if (this.f23249a && this.f23250b == null) {
                str = l0Var.n();
            } else {
                str = this.f23250b;
            }
            g.j0 j0Var = l0Var.f23445b;
            if (j0Var != null) {
                i10 = 0;
                for (g.n0 n0Var : j0Var.getChildren()) {
                    g.l0 l0Var2 = (g.l0) n0Var;
                    if (str == null || l0Var2.n().equals(str)) {
                        i10++;
                    }
                }
            } else {
                i10 = 1;
            }
            if (i10 != 1) {
                return false;
            }
            return true;
        }

        public String toString() {
            if (this.f23249a) {
                return String.format("only-of-type <%s>", this.f23250b);
            }
            return String.format("only-child", new Object[0]);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class n implements g {
        private n() {
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            if (l0Var.f23445b == null) {
                return true;
            }
            return false;
        }

        public String toString() {
            return "root";
        }

        /* synthetic */ n(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class o implements g {
        private o() {
        }

        @Override // f6.b.g
        public boolean a(q qVar, g.l0 l0Var) {
            if (qVar == null || l0Var != qVar.f23254a) {
                return false;
            }
            return true;
        }

        public String toString() {
            return "target";
        }

        /* synthetic */ o(a aVar) {
            this();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class p {

        /* renamed from: a  reason: collision with root package name */
        s f23251a;

        /* renamed from: b  reason: collision with root package name */
        g.e0 f23252b;

        /* renamed from: c  reason: collision with root package name */
        u f23253c;

        p(s sVar, g.e0 e0Var, u uVar) {
            this.f23251a = sVar;
            this.f23252b = e0Var;
            this.f23253c = uVar;
        }

        public String toString() {
            return String.valueOf(this.f23251a) + " {...} (src=" + this.f23253c + ")";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class q {

        /* renamed from: a  reason: collision with root package name */
        g.l0 f23254a;

        public String toString() {
            g.l0 l0Var = this.f23254a;
            if (l0Var != null) {
                return String.format("<%s id=\"%s\">", l0Var.n(), this.f23254a.f23434c);
            }
            return "";
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class r {

        /* renamed from: a  reason: collision with root package name */
        private List f23255a = null;

        void a(p pVar) {
            if (this.f23255a == null) {
                this.f23255a = new ArrayList();
            }
            for (int i10 = 0; i10 < this.f23255a.size(); i10++) {
                if (((p) this.f23255a.get(i10)).f23251a.f23257b > pVar.f23251a.f23257b) {
                    this.f23255a.add(i10, pVar);
                    return;
                }
            }
            this.f23255a.add(pVar);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void b(r rVar) {
            if (rVar.f23255a != null) {
                if (this.f23255a == null) {
                    this.f23255a = new ArrayList(rVar.f23255a.size());
                }
                for (p pVar : rVar.f23255a) {
                    a(pVar);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public List c() {
            return this.f23255a;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public boolean d() {
            List list = this.f23255a;
            if (list != null && !list.isEmpty()) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public void e(u uVar) {
            List list = this.f23255a;
            if (list != null) {
                Iterator it = list.iterator();
                while (it.hasNext()) {
                    if (((p) it.next()).f23253c == uVar) {
                        it.remove();
                    }
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public int f() {
            List list = this.f23255a;
            if (list != null) {
                return list.size();
            }
            return 0;
        }

        public String toString() {
            if (this.f23255a == null) {
                return "";
            }
            StringBuilder sb2 = new StringBuilder();
            for (p pVar : this.f23255a) {
                sb2.append(pVar.toString());
                sb2.append('\n');
            }
            return sb2.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class t {

        /* renamed from: a  reason: collision with root package name */
        e f23258a;

        /* renamed from: b  reason: collision with root package name */
        String f23259b;

        /* renamed from: c  reason: collision with root package name */
        List f23260c = null;

        /* renamed from: d  reason: collision with root package name */
        List f23261d = null;

        t(e eVar, String str) {
            this.f23258a = null;
            this.f23259b = null;
            this.f23258a = eVar == null ? e.DESCENDANT : eVar;
            this.f23259b = str;
        }

        void a(String str, c cVar, String str2) {
            if (this.f23260c == null) {
                this.f23260c = new ArrayList();
            }
            this.f23260c.add(new C0309b(str, cVar, str2));
        }

        void b(g gVar) {
            if (this.f23261d == null) {
                this.f23261d = new ArrayList();
            }
            this.f23261d.add(gVar);
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            e eVar = this.f23258a;
            if (eVar == e.CHILD) {
                sb2.append("> ");
            } else if (eVar == e.FOLLOWS) {
                sb2.append("+ ");
            }
            String str = this.f23259b;
            if (str == null) {
                str = "*";
            }
            sb2.append(str);
            List<C0309b> list = this.f23260c;
            if (list != null) {
                for (C0309b c0309b : list) {
                    sb2.append('[');
                    sb2.append(c0309b.f23201a);
                    int i10 = a.f23199a[c0309b.f23202b.ordinal()];
                    if (i10 != 1) {
                        if (i10 != 2) {
                            if (i10 == 3) {
                                sb2.append("|=");
                                sb2.append(c0309b.f23203c);
                            }
                        } else {
                            sb2.append("~=");
                            sb2.append(c0309b.f23203c);
                        }
                    } else {
                        sb2.append('=');
                        sb2.append(c0309b.f23203c);
                    }
                    sb2.append(']');
                }
            }
            List<g> list2 = this.f23261d;
            if (list2 != null) {
                for (g gVar : list2) {
                    sb2.append(':');
                    sb2.append(gVar);
                }
            }
            return sb2.toString();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum u {
        Document,
        RenderOptions
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(u uVar) {
        this(f.screen, uVar);
    }

    private static int a(List list, int i10, g.l0 l0Var) {
        int i11 = 0;
        if (i10 < 0) {
            return 0;
        }
        Object obj = list.get(i10);
        g.j0 j0Var = l0Var.f23445b;
        if (obj != j0Var) {
            return -1;
        }
        for (g.n0 n0Var : j0Var.getChildren()) {
            if (n0Var == l0Var) {
                return i11;
            }
            i11++;
        }
        return -1;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean b(String str, f fVar) {
        d dVar = new d(str);
        dVar.A();
        return c(h(dVar), fVar);
    }

    private static boolean c(List list, f fVar) {
        Iterator it = list.iterator();
        while (it.hasNext()) {
            f fVar2 = (f) it.next();
            if (fVar2 != f.all) {
                if (fVar2 == fVar) {
                    return true;
                }
            } else {
                return true;
            }
        }
        return false;
    }

    private void e(r rVar, d dVar) {
        String H = dVar.H();
        dVar.A();
        if (H != null) {
            if (!this.f23198c && H.equals("media")) {
                List h10 = h(dVar);
                if (dVar.f('{')) {
                    dVar.A();
                    if (c(h10, this.f23196a)) {
                        this.f23198c = true;
                        rVar.b(j(dVar));
                        this.f23198c = false;
                    } else {
                        j(dVar);
                    }
                    if (!dVar.h() && !dVar.f('}')) {
                        throw new f6.a("Invalid @media rule: expected '}' at end of rule set");
                    }
                } else {
                    throw new f6.a("Invalid @media rule: missing rule set");
                }
            } else if (!this.f23198c && H.equals("import")) {
                String N = dVar.N();
                if (N == null) {
                    N = dVar.F();
                }
                if (N != null) {
                    dVar.A();
                    h(dVar);
                    if (!dVar.h() && !dVar.f(';')) {
                        throw new f6.a("Invalid @media rule: expected '}' at end of rule set");
                    }
                    f6.g.k();
                } else {
                    throw new f6.a("Invalid @import rule: expected string or url()");
                }
            } else {
                p("Ignoring @%s rule", H);
                o(dVar);
            }
            dVar.A();
            return;
        }
        throw new f6.a("Invalid '@' rule");
    }

    public static List f(String str) {
        d dVar = new d(str);
        ArrayList arrayList = null;
        while (!dVar.h()) {
            String r10 = dVar.r();
            if (r10 != null) {
                if (arrayList == null) {
                    arrayList = new ArrayList();
                }
                arrayList.add(r10);
                dVar.A();
            }
        }
        return arrayList;
    }

    private g.e0 g(d dVar) {
        g.e0 e0Var = new g.e0();
        do {
            String H = dVar.H();
            dVar.A();
            if (dVar.f(':')) {
                dVar.A();
                String J = dVar.J();
                if (J != null) {
                    dVar.A();
                    if (dVar.f('!')) {
                        dVar.A();
                        if (dVar.g("important")) {
                            dVar.A();
                        } else {
                            throw new f6.a("Malformed rule set: found unexpected '!'");
                        }
                    }
                    dVar.f(';');
                    f6.k.S0(e0Var, H, J);
                    dVar.A();
                    if (dVar.h()) {
                        break;
                    }
                } else {
                    throw new f6.a("Expected property value");
                }
            } else {
                throw new f6.a("Expected ':'");
            }
        } while (!dVar.f('}'));
        return e0Var;
    }

    private static List h(d dVar) {
        String w10;
        ArrayList arrayList = new ArrayList();
        while (!dVar.h() && (w10 = dVar.w()) != null) {
            try {
                arrayList.add(f.valueOf(w10));
            } catch (IllegalArgumentException unused) {
            }
            if (!dVar.z()) {
                break;
            }
        }
        return arrayList;
    }

    private boolean i(r rVar, d dVar) {
        List<s> L = dVar.L();
        if (L != null && !L.isEmpty()) {
            if (dVar.f('{')) {
                dVar.A();
                g.e0 g10 = g(dVar);
                dVar.A();
                for (s sVar : L) {
                    rVar.a(new p(sVar, g10, this.f23197b));
                }
                return true;
            }
            throw new f6.a("Malformed rule block: expected '{'");
        }
        return false;
    }

    private r j(d dVar) {
        r rVar = new r();
        while (!dVar.h()) {
            try {
                if (!dVar.g("<!--") && !dVar.g("-->")) {
                    if (dVar.f('@')) {
                        e(rVar, dVar);
                    } else if (!i(rVar, dVar)) {
                        break;
                    }
                }
            } catch (f6.a e10) {
                Log.e("CSSParser", "CSS parser terminated early due to error: " + e10.getMessage());
                return rVar;
            }
        }
        return rVar;
    }

    private static boolean k(q qVar, s sVar, int i10, List list, int i11, g.l0 l0Var) {
        t e10 = sVar.e(i10);
        if (!n(qVar, e10, list, i11, l0Var)) {
            return false;
        }
        e eVar = e10.f23258a;
        if (eVar == e.DESCENDANT) {
            if (i10 == 0) {
                return true;
            }
            while (i11 >= 0) {
                if (m(qVar, sVar, i10 - 1, list, i11)) {
                    return true;
                }
                i11--;
            }
            return false;
        } else if (eVar == e.CHILD) {
            return m(qVar, sVar, i10 - 1, list, i11);
        } else {
            int a10 = a(list, i11, l0Var);
            if (a10 <= 0) {
                return false;
            }
            return k(qVar, sVar, i10 - 1, list, i11, (g.l0) l0Var.f23445b.getChildren().get(a10 - 1));
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean l(q qVar, s sVar, g.l0 l0Var) {
        ArrayList arrayList = new ArrayList();
        for (g.j0 j0Var = l0Var.f23445b; j0Var != null; j0Var = ((g.n0) j0Var).f23445b) {
            arrayList.add(0, j0Var);
        }
        int size = arrayList.size() - 1;
        if (sVar.g() == 1) {
            return n(qVar, sVar.e(0), arrayList, size, l0Var);
        }
        return k(qVar, sVar, sVar.g() - 1, arrayList, size, l0Var);
    }

    private static boolean m(q qVar, s sVar, int i10, List list, int i11) {
        t e10 = sVar.e(i10);
        g.l0 l0Var = (g.l0) list.get(i11);
        if (!n(qVar, e10, list, i11, l0Var)) {
            return false;
        }
        e eVar = e10.f23258a;
        if (eVar == e.DESCENDANT) {
            if (i10 == 0) {
                return true;
            }
            while (i11 > 0) {
                i11--;
                if (m(qVar, sVar, i10 - 1, list, i11)) {
                    return true;
                }
            }
            return false;
        } else if (eVar == e.CHILD) {
            return m(qVar, sVar, i10 - 1, list, i11 - 1);
        } else {
            int a10 = a(list, i11, l0Var);
            if (a10 <= 0) {
                return false;
            }
            return k(qVar, sVar, i10 - 1, list, i11, (g.l0) l0Var.f23445b.getChildren().get(a10 - 1));
        }
    }

    private static boolean n(q qVar, t tVar, List list, int i10, g.l0 l0Var) {
        List list2;
        String str = tVar.f23259b;
        if (str != null && !str.equals(l0Var.n().toLowerCase(Locale.US))) {
            return false;
        }
        List<C0309b> list3 = tVar.f23260c;
        if (list3 != null) {
            for (C0309b c0309b : list3) {
                String str2 = c0309b.f23201a;
                str2.getClass();
                if (!str2.equals(StackTraceHelper.ID_KEY)) {
                    if (!str2.equals("class") || (list2 = l0Var.f23438g) == null || !list2.contains(c0309b.f23203c)) {
                        return false;
                    }
                } else if (!c0309b.f23203c.equals(l0Var.f23434c)) {
                    return false;
                }
            }
        }
        List<g> list4 = tVar.f23261d;
        if (list4 != null) {
            for (g gVar : list4) {
                if (!gVar.a(qVar, l0Var)) {
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    private void o(d dVar) {
        int i10 = 0;
        while (!dVar.h()) {
            int intValue = dVar.l().intValue();
            if (intValue != 59 || i10 != 0) {
                if (intValue == 123) {
                    i10++;
                } else if (intValue == 125 && i10 > 0 && i10 - 1 == 0) {
                    return;
                }
            } else {
                return;
            }
        }
    }

    private static void p(String str, Object... objArr) {
        Log.w("CSSParser", String.format(str, objArr));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public r d(String str) {
        d dVar = new d(str);
        dVar.A();
        return j(dVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(f fVar, u uVar) {
        this.f23198c = false;
        this.f23196a = fVar;
        this.f23197b = uVar;
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class s {

        /* renamed from: a  reason: collision with root package name */
        List f23256a;

        /* renamed from: b  reason: collision with root package name */
        int f23257b;

        private s() {
            this.f23256a = null;
            this.f23257b = 0;
        }

        void a(t tVar) {
            if (this.f23256a == null) {
                this.f23256a = new ArrayList();
            }
            this.f23256a.add(tVar);
        }

        void b() {
            this.f23257b += 1000;
        }

        void c() {
            this.f23257b++;
        }

        void d() {
            this.f23257b += 1000000;
        }

        t e(int i10) {
            return (t) this.f23256a.get(i10);
        }

        boolean f() {
            List list = this.f23256a;
            if (list != null && !list.isEmpty()) {
                return false;
            }
            return true;
        }

        int g() {
            List list = this.f23256a;
            if (list == null) {
                return 0;
            }
            return list.size();
        }

        public String toString() {
            StringBuilder sb2 = new StringBuilder();
            for (t tVar : this.f23256a) {
                sb2.append(tVar);
                sb2.append(' ');
            }
            sb2.append('[');
            sb2.append(this.f23257b);
            sb2.append(']');
            return sb2.toString();
        }

        /* synthetic */ s(a aVar) {
            this();
        }
    }
}
