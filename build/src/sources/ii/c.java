package ii;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f26861a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26862b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f26861a = file;
            if (str != null) {
                this.f26862b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.u
    public final File a() {
        return this.f26861a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // ii.u
    public final String b() {
        return this.f26862b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f26861a.equals(uVar.a()) && this.f26862b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f26861a.hashCode() ^ 1000003) * 1000003) ^ this.f26862b.hashCode();
    }

    public final String toString() {
        String obj = this.f26861a.toString();
        String str = this.f26862b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
