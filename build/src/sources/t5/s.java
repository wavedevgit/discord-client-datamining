package t5;

import android.graphics.Paint;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class s implements t5.c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48595a;

    /* renamed from: b  reason: collision with root package name */
    private final s5.b f48596b;

    /* renamed from: c  reason: collision with root package name */
    private final List f48597c;

    /* renamed from: d  reason: collision with root package name */
    private final s5.a f48598d;

    /* renamed from: e  reason: collision with root package name */
    private final s5.d f48599e;

    /* renamed from: f  reason: collision with root package name */
    private final s5.b f48600f;

    /* renamed from: g  reason: collision with root package name */
    private final b f48601g;

    /* renamed from: h  reason: collision with root package name */
    private final c f48602h;

    /* renamed from: i  reason: collision with root package name */
    private final float f48603i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f48604j;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static /* synthetic */ class a {

        /* renamed from: a  reason: collision with root package name */
        static final /* synthetic */ int[] f48605a;

        /* renamed from: b  reason: collision with root package name */
        static final /* synthetic */ int[] f48606b;

        static {
            int[] iArr = new int[c.values().length];
            f48606b = iArr;
            try {
                iArr[c.BEVEL.ordinal()] = 1;
            } catch (NoSuchFieldError unused) {
            }
            try {
                f48606b[c.MITER.ordinal()] = 2;
            } catch (NoSuchFieldError unused2) {
            }
            try {
                f48606b[c.ROUND.ordinal()] = 3;
            } catch (NoSuchFieldError unused3) {
            }
            int[] iArr2 = new int[b.values().length];
            f48605a = iArr2;
            try {
                iArr2[b.BUTT.ordinal()] = 1;
            } catch (NoSuchFieldError unused4) {
            }
            try {
                f48605a[b.ROUND.ordinal()] = 2;
            } catch (NoSuchFieldError unused5) {
            }
            try {
                f48605a[b.UNKNOWN.ordinal()] = 3;
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
            int i10 = a.f48605a[ordinal()];
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
            int i10 = a.f48606b[ordinal()];
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
        this.f48595a = str;
        this.f48596b = bVar;
        this.f48597c = list;
        this.f48598d = aVar;
        this.f48599e = dVar;
        this.f48600f = bVar2;
        this.f48601g = bVar3;
        this.f48602h = cVar;
        this.f48603i = f10;
        this.f48604j = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        return new n5.t(nVar, bVar, this);
    }

    public b b() {
        return this.f48601g;
    }

    public s5.a c() {
        return this.f48598d;
    }

    public s5.b d() {
        return this.f48596b;
    }

    public c e() {
        return this.f48602h;
    }

    public List f() {
        return this.f48597c;
    }

    public float g() {
        return this.f48603i;
    }

    public String h() {
        return this.f48595a;
    }

    public s5.d i() {
        return this.f48599e;
    }

    public s5.b j() {
        return this.f48600f;
    }

    public boolean k() {
        return this.f48604j;
    }
}
