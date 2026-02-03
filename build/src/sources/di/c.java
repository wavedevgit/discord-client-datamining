package di;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f20603a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20604b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f20603a = file;
            if (str != null) {
                this.f20604b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // di.u
    public final File a() {
        return this.f20603a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // di.u
    public final String b() {
        return this.f20604b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f20603a.equals(uVar.a()) && this.f20604b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f20603a.hashCode() ^ 1000003) * 1000003) ^ this.f20604b.hashCode();
    }

    public final String toString() {
        String obj = this.f20603a.toString();
        String str = this.f20604b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
