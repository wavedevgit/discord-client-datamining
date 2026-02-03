package di;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class c extends u {

    /* renamed from: a  reason: collision with root package name */
    private final File f21744a;

    /* renamed from: b  reason: collision with root package name */
    private final String f21745b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public c(File file, String str) {
        if (file != null) {
            this.f21744a = file;
            if (str != null) {
                this.f21745b = str;
                return;
            }
            throw new NullPointerException("Null splitId");
        }
        throw new NullPointerException("Null splitFile");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // di.u
    public final File a() {
        return this.f21744a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // di.u
    public final String b() {
        return this.f21745b;
    }

    public final boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (obj instanceof u) {
            u uVar = (u) obj;
            if (this.f21744a.equals(uVar.a()) && this.f21745b.equals(uVar.b())) {
                return true;
            }
        }
        return false;
    }

    public final int hashCode() {
        return ((this.f21744a.hashCode() ^ 1000003) * 1000003) ^ this.f21745b.hashCode();
    }

    public final String toString() {
        String obj = this.f21744a.toString();
        String str = this.f21745b;
        return "SplitFileInfo{splitFile=" + obj + ", splitId=" + str + "}";
    }
}
