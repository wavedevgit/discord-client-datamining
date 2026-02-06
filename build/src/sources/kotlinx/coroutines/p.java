package kotlinx.coroutines;

import os.d1;
import os.w0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class p implements w0 {

    /* renamed from: d  reason: collision with root package name */
    private final boolean f35072d;

    public p(boolean z10) {
        this.f35072d = z10;
    }

    @Override // os.w0
    public boolean a() {
        return this.f35072d;
    }

    @Override // os.w0
    public d1 b() {
        return null;
    }

    public String toString() {
        String str;
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Empty{");
        if (a()) {
            str = "Active";
        } else {
            str = "New";
        }
        sb2.append(str);
        sb2.append('}');
        return sb2.toString();
    }
}
