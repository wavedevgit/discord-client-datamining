package s5;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48779a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48780b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48781c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public enum a {
        MERGE,
        ADD,
        SUBTRACT,
        INTERSECT,
        EXCLUDE_INTERSECTIONS;

        public static a d(int i10) {
            if (i10 != 1) {
                if (i10 != 2) {
                    if (i10 != 3) {
                        if (i10 != 4) {
                            if (i10 != 5) {
                                return MERGE;
                            }
                            return EXCLUDE_INTERSECTIONS;
                        }
                        return INTERSECT;
                    }
                    return SUBTRACT;
                }
                return ADD;
            }
            return MERGE;
        }
    }

    public j(String str, a aVar, boolean z10) {
        this.f48779a = str;
        this.f48780b = aVar;
        this.f48781c = z10;
    }

    @Override // s5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, t5.b bVar) {
        if (!nVar.B()) {
            x5.d.c("Animation contains merge paths but they are disabled.");
            return null;
        }
        return new n5.l(this);
    }

    public a b() {
        return this.f48780b;
    }

    public String c() {
        return this.f48779a;
    }

    public boolean d() {
        return this.f48781c;
    }

    public String toString() {
        return "MergePaths{mode=" + this.f48780b + '}';
    }
}
