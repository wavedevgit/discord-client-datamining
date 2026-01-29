package s5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements s5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48815a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.b f48816b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48817c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.a f48818d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.d f48819e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f48820f;

    /* renamed from: g  reason: collision with root package name */
    private final b f48821g;

    /* renamed from: h  reason: collision with root package name */
    private final c f48822h;

    /* renamed from: i  reason: collision with root package name */
    private final float f48823i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48824j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48825a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f48826b;

        static {
            int[] iArr = new int[c.values().length];
            f48826b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48826b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f48826b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f48825a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f48825a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f48825a[b.UNKNOWN.ordinal()] = 3;
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
            int i10 = a.f48825a[ordinal()];
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
            int i10 = a.f48826b[ordinal()];
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
        this.f48815a = str;
        this.f48816b = bVar;
        this.f48817c = list;
        this.f48818d = aVar;
        this.f48819e = dVar;
        this.f48820f = bVar2;
        this.f48821g = bVar3;
        this.f48822h = cVar;
        this.f48823i = f10;
        this.f48824j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f48821g;
    }

    public r5.a c() {
        return this.f48818d;
    }

    public r5.b d() {
        return this.f48816b;
    }

    public c e() {
        return this.f48822h;
    }

    public List f() {
        return this.f48817c;
    }

    public float g() {
        return this.f48823i;
    }

    public String h() {
        return this.f48815a;
    }

    public r5.d i() {
        return this.f48819e;
    }

    public r5.b j() {
        return this.f48820f;
    }

    public boolean k() {
        return this.f48824j;
    }
}
