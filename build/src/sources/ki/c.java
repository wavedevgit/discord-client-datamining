package ki;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f31749a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31750b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f31749a = file;
            if (str != null) {
                this.f31750b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.u
    public final File a() {
        return this.f31749a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ki.u
    public final String b() {
        return this.f31750b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f31749a.equals(uVar.a()) && this.f31750b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f31749a.hashCode() ^ 1000003) * 1000003) ^ this.f31750b.hashCode();
    }

    public final String toString() {
        String obj = this.f31749a.toString();
        String str = this.f31750b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
