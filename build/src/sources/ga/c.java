package ga;

import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f24097c = new a(null);

    /* renamed from: d  reason: collision with root package name */
    public static final c f24098d = new c("UNKNOWN", null);

    /* renamed from: a  reason: collision with root package name */
    private final String f24099a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24100b;

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
        this.f24099a = name;
        this.f24100b = str;
    }

    public final String a() {
        return this.f24099a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof c)) {
            return false;
        }
        c cVar = (c) obj;
        if (Intrinsics.areEqual(this.f24099a, cVar.f24099a) && Intrinsics.areEqual(this.f24100b, cVar.f24100b)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        int hashCode;
        int hashCode2 = this.f24099a.hashCode() * 31;
        String str = this.f24100b;
        if (str == null) {
            hashCode = 0;
        } else {
            hashCode = str.hashCode();
        }
        return hashCode2 + hashCode;
    }

    public String toString() {
        return this.f24099a;
    }
}
