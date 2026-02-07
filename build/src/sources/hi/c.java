package hi;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f26046a;

    /* renamed from: b  reason: collision with root package name */
    private final String f26047b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f26046a = file;
            if (str != null) {
                this.f26047b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.u
    public final File a() {
        return this.f26046a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // hi.u
    public final String b() {
        return this.f26047b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f26046a.equals(uVar.a()) && this.f26047b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f26046a.hashCode() ^ 1000003) * 1000003) ^ this.f26047b.hashCode();
    }

    public final String toString() {
        String obj = this.f26046a.toString();
        String str = this.f26047b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
