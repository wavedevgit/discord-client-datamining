package tv;

import java.util.List;
import jk.j0;
import jk.q0;
import jk.s;
import jk.u;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a extends s implements j0 {

    /* renamed from: q  reason: collision with root package name */
    private static final a f50295q;

    /* renamed from: r  reason: collision with root package name */
    private static volatile q0 f50296r;

    /* renamed from: p  reason: collision with root package name */
    private u.b f50297p = s.k();

    /* renamed from: tv.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    static /* synthetic */ class C0687a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50298a;

        static {
            int[] iArr = new int[s.d.values().length];
            f50298a = iArr;
            try {
                iArr[s.d.NEW_MUTABLE_INSTANCE.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50298a[s.d.NEW_BUILDER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50298a[s.d.BUILD_MESSAGE_INFO.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            try {
                f50298a[s.d.GET_DEFAULT_INSTANCE.ordinal()] = 4;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f50298a[s.d.GET_PARSER.ordinal()] = 5;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50298a[s.d.GET_MEMOIZED_IS_INITIALIZED.ordinal()] = 6;
            } catch (NoSuchFieldError unused6) {
            }
            try {
                f50298a[s.d.SET_MEMOIZED_IS_INITIALIZED.ordinal()] = 7;
            } catch (NoSuchFieldError unused7) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b extends s.a implements j0 {
        private b() {
            super(a.f50295q);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class c extends s implements j0 {
    }

    static {
        a aVar = new a();
        f50295q = aVar;
        s.C(a.class, aVar);
    }

    private a() {
    }

    public static a H() {
        return f50295q;
    }

    public List G() {
        return this.f50297p;
    }

    @Override // jk.s
    protected final Object j(s.d dVar, Object obj, Object obj2) {
        q0 q0Var;
        switch (C0687a.f50298a[dVar.ordinal()]) {
            case 1:
                return new a();
            case 2:
                return new b();
            case 3:
                return s.x(f50295q, "\u0001\u0001\u0000\u0000\b\b\u0001\u0000\u0001\u0000\b\u001b", new Object[]{"constrainedValues_", c.class});
            case 4:
                return f50295q;
            case 5:
                q0 q0Var2 = f50296r;
                if (q0Var2 == null) {
                    synchronized (a.class) {
                        try {
                            q0Var = f50296r;
                            if (q0Var == null) {
                                q0Var = new s.b(f50295q);
                                f50296r = q0Var;
                            }
                        } catch (Throwable th2) {
                            throw th2;
                        }
                    }
                    return q0Var;
                }
                return q0Var2;
            case 6:
                return (byte) 1;
            case 7:
                return null;
            default:
                throw new UnsupportedOperationException();
        }
    }
}
