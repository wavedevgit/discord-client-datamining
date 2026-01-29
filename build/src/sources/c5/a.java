package c5;

import g5.m;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a implements b {

    /* renamed from: a  reason: collision with root package name */
    private final boolean f8122a;

    public a(boolean z10) {
        this.f8122a = z10;
    }

    @Override // c5.b
    /* renamed from: b */
    public String a(File file, m mVar) {
        if (this.f8122a) {
            return file.getPath() + ':' + file.lastModified();
        }
        return file.getPath();
    }
}
