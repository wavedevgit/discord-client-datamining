package s5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements s5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f49776a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.b f49777b;

    /* renamed from: c  reason: collision with root package name */
    private final List f49778c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.a f49779d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.d f49780e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f49781f;

    /* renamed from: g  reason: collision with root package name */
    private final b f49782g;

    /* renamed from: h  reason: collision with root package name */
    private final c f49783h;

    /* renamed from: i  reason: collision with root package name */
    private final float f49784i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f49785j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f49786a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f49787b;

        static {
            int[] iArr = new int[c.values().length];
            f49787b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f49787b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f49787b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f49786a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f49786a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f49786a[b.UNKNOWN.ordinal()] = 3;
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
            int i10 = a.f49786a[ordinal()];
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
            int i10 = a.f49787b[ordinal()];
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

    public s(String str, r5.b bVar, List list, r5.a aVar, r5.d dVar, r5.b bVar2, b bVar3, c cVar, float f10, boolean z10) {
        this.f49776a = str;
        this.f49777b = bVar;
        this.f49778c = list;
        this.f49779d = aVar;
        this.f49780e = dVar;
        this.f49781f = bVar2;
        this.f49782g = bVar3;
        this.f49783h = cVar;
        this.f49784i = f10;
        this.f49785j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f49782g;
    }

    public r5.a c() {
        return this.f49779d;
    }

    public r5.b d() {
        return this.f49777b;
    }

    public c e() {
        return this.f49783h;
    }

    public List f() {
        return this.f49778c;
    }

    public float g() {
        return this.f49784i;
    }

    public String h() {
        return this.f49776a;
    }

    public r5.d i() {
        return this.f49780e;
    }

    public r5.b j() {
        return this.f49781f;
    }

    public boolean k() {
        return this.f49785j;
    }
}
