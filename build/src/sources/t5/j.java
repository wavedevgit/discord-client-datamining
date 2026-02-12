package t5;

import l5.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements c {

    /* renamed from: a  reason: collision with root package name */
    private final String f48543a;

    /* renamed from: b  reason: collision with root package name */
    private final a f48544b;

    /* renamed from: c  reason: collision with root package name */
    private final boolean f48545c;

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
        this.f48543a = str;
        this.f48544b = aVar;
        this.f48545c = z10;
    }

    @Override // t5.c
    public n5.c a(com.airbnb.lottie.n nVar, l5.i iVar, u5.b bVar) {
        if (!nVar.g0(w.MergePathsApi19)) {
            y5.d.c("Animation contains merge paths but they are disabled.");
            return null;
        }
        return new n5.l(this);
    }

    public a b() {
        return this.f48544b;
    }

    public String c() {
        return this.f48543a;
    }

    public boolean d() {
        return this.f48545c;
    }

    public String toString() {
        return "MergePaths{mode=" + this.f48544b + '}';
    }
}
