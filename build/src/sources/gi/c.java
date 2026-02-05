package gi;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f24927a;

    /* renamed from: b  reason: collision with root package name */
    private final String f24928b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f24927a = file;
            if (str != null) {
                this.f24928b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.u
    public final File a() {
        return this.f24927a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // gi.u
    public final String b() {
        return this.f24928b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f24927a.equals(uVar.a()) && this.f24928b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f24927a.hashCode() ^ 1000003) * 1000003) ^ this.f24928b.hashCode();
    }

    public final String toString() {
        String obj = this.f24927a.toString();
        String str = this.f24928b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
