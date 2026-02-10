package t5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements t5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f50662a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.b f50663b;

    /* renamed from: c  reason: collision with root package name */
    private final List f50664c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f50665d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f50666e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f50667f;

    /* renamed from: g  reason: collision with root package name */
    private final b f50668g;

    /* renamed from: h  reason: collision with root package name */
    private final c f50669h;

    /* renamed from: i  reason: collision with root package name */
    private final float f50670i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f50671j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f50672a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f50673b;

        static {
            int[] iArr = new int[c.values().length];
            f50673b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f50673b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f50673b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f50672a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f50672a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f50672a[b.UNKNOWN.ordinal()] = 3;
            } catch (NoSuchFieldError unused6) {
            }
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum b {
        BUTT,
        ROUND,
        UNKNOWN;

        public Paint.Cap d() {
            int i10 = a.f50672a[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    return Paint.Cap.SQUARE;
                }
                return Paint.Cap.ROUND;
            }
            return Paint.Cap.BUTT;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum c {
        MITER,
        ROUND,
        BEVEL;

        public Paint.Join d() {
            int i10 = a.f50673b[ordinal()];
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        return null;
                    }
                    return Paint.Join.ROUND;
                }
                return Paint.Join.MITER;
            }
            return Paint.Join.BEVEL;
        }
    }

    public s(String str, s5.b bVar, List list, s5.a aVar, s5.d dVar, s5.b bVar2, b bVar3, c cVar, float f10, boolean z10) {
        this.f50662a = str;
        this.f50663b = bVar;
        this.f50664c = list;
        this.f50665d = aVar;
        this.f50666e = dVar;
        this.f50667f = bVar2;
        this.f50668g = bVar3;
        this.f50669h = cVar;
        this.f50670i = f10;
        this.f50671j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f50668g;
    }

    public s5.a c() {
        return this.f50665d;
    }

    public s5.b d() {
        return this.f50663b;
    }

    public c e() {
        return this.f50669h;
    }

    public List f() {
        return this.f50664c;
    }

    public float g() {
        return this.f50670i;
    }

    public String h() {
        return this.f50662a;
    }

    public s5.d i() {
        return this.f50666e;
    }

    public s5.b j() {
        return this.f50667f;
    }

    public boolean k() {
        return this.f50671j;
    }
}
