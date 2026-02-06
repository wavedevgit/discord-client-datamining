package fa;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f23012c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f23013d = new c("UNKNOWN", null);

    /* renamed from: a  reason: collision with root package name */
    private final String f23014a;

    /* renamed from: b  reason: collision with root package name */
    private final String f23015b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public interface b {
        c a(byte[] bArr, int i10);

        int b();
    }

    public c(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        this.f23014a = name;
        this.f23015b = str;
    }

    public final String a() {
        return this.f23014a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f23014a, cVar.f23014a) && Intrinsics.areEqual(this.f23015b, cVar.f23015b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f23014a.hashCode() * 31;
        String str = this.f23015b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        return this.f23014a;
    }
}
