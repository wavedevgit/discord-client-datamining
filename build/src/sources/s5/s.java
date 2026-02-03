package s5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements s5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48885a;

    /* renamed from: b  reason: collision with root package name */
    private final r5.b f48886b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48887c;

    /* renamed from: d  reason: collision with root package name */
    private final r5.a f48888d;

    /* renamed from: e  reason: collision with root package name */
    private final r5.d f48889e;

    /* renamed from: f  reason: collision with root package name */
    private final r5.b f48890f;

    /* renamed from: g  reason: collision with root package name */
    private final b f48891g;

    /* renamed from: h  reason: collision with root package name */
    private final c f48892h;

    /* renamed from: i  reason: collision with root package name */
    private final float f48893i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48894j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48895a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f48896b;

        static {
            int[] iArr = new int[c.values().length];
            f48896b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48896b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f48896b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f48895a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f48895a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f48895a[b.UNKNOWN.ordinal()] = 3;
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
            int i10 = a.f48895a[ordinal()];
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
            int i10 = a.f48896b[ordinal()];
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
        this.f48885a = str;
        this.f48886b = bVar;
        this.f48887c = list;
        this.f48888d = aVar;
        this.f48889e = dVar;
        this.f48890f = bVar2;
        this.f48891g = bVar3;
        this.f48892h = cVar;
        this.f48893i = f10;
        this.f48894j = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f48891g;
    }

    public r5.a c() {
        return this.f48888d;
    }

    public r5.b d() {
        return this.f48886b;
    }

    public c e() {
        return this.f48892h;
    }

    public List f() {
        return this.f48887c;
    }

    public float g() {
        return this.f48893i;
    }

    public String h() {
        return this.f48885a;
    }

    public r5.d i() {
        return this.f48889e;
    }

    public r5.b j() {
        return this.f48890f;
    }

    public boolean k() {
        return this.f48894j;
    }
}
