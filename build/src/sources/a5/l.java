package a5;

import kotlin.jvm.internal.Intrinsics;
import x4.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class l extends g {

    /* renamed from: a  reason: collision with root package name */
    private final r f421a;

    /* renamed from: b  reason: collision with root package name */
    private final String f422b;

    /* renamed from: c  reason: collision with root package name */
    private final x4.h f423c;

    public l(r rVar, String str, x4.h hVar) {
        super(null);
        this.f421a = rVar;
        this.f422b = str;
        this.f423c = hVar;
    }

    public final x4.h a() {
        return this.f423c;
    }

    public final String b() {
        return this.f422b;
    }

    public final r c() {
        return this.f421a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof l) {
            l lVar = (l) obj;
            if (Intrinsics.areEqual(this.f421a, lVar.f421a) && Intrinsics.areEqual(this.f422b, lVar.f422b) && this.f423c == lVar.f423c) {
                return true;
            }
            return false;
        }
        return false;
    }

    public int hashCode() {
        int i10;
        int hashCode = this.f421a.hashCode() * 31;
        String str = this.f422b;
        if (str != null) {
            i10 = str.hashCode();
        } else {
            i10 = 0;
        }
        return ((hashCode + i10) * 31) + this.f423c.hashCode();
    }
}
