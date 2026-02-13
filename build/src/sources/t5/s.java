package t5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements t5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49163a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.b f49164b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49165c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f49166d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f49167e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f49168f;

    /* renamed from: g  reason: collision with root package name */
    private final b f49169g;

    /* renamed from: h  reason: collision with root package name */
    private final c f49170h;

    /* renamed from: i  reason: collision with root package name */
    private final float f49171i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49172j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49173a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f49174b;

        static {
            int[] iArr = new int[c.values().length];
            f49174b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49174b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49174b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f49173a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f49173a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f49173a[b.UNKNOWN.ordinal()] = 3;
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
            int i10 = a.f49173a[ordinal()];
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
            int i10 = a.f49174b[ordinal()];
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
        this.f49163a = str;
        this.f49164b = bVar;
        this.f49165c = list;
        this.f49166d = aVar;
        this.f49167e = dVar;
        this.f49168f = bVar2;
        this.f49169g = bVar3;
        this.f49170h = cVar;
        this.f49171i = f10;
        this.f49172j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f49169g;
    }

    public s5.a c() {
        return this.f49166d;
    }

    public s5.b d() {
        return this.f49164b;
    }

    public c e() {
        return this.f49170h;
    }

    public List f() {
        return this.f49165c;
    }

    public float g() {
        return this.f49171i;
    }

    public String h() {
        return this.f49163a;
    }

    public s5.d i() {
        return this.f49167e;
    }

    public s5.b j() {
        return this.f49168f;
    }

    public boolean k() {
        return this.f49172j;
    }
}
