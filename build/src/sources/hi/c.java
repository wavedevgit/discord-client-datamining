package hi;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f25998a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25999b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f25998a = file;
            if (str != null) {
                this.f25999b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.u
    public final File a() {
        return this.f25998a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.u
    public final String b() {
        return this.f25999b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f25998a.equals(uVar.a()) && this.f25999b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f25998a.hashCode() ^ 1000003) * 1000003) ^ this.f25999b.hashCode();
    }

    public final String toString() {
        String obj = this.f25998a.toString();
        String str = this.f25999b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
