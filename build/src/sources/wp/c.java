package wp;

import android.content.Context;
import bs.j;
import java.io.File;
import java.util.List;
import java.util.UUID;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c {

    /* renamed from: a  reason: collision with root package name */
    private final File f54052a;

    /* renamed from: b  reason: collision with root package name */
    private final File f54053b;

    public c(Context context) {
        Intrinsics.checkNotNullParameter(context, "context");
        File file = new File(context.getFilesDir(), ".com.withpersona.sdk2.inquiry");
        this.f54052a = file;
        this.f54053b = new File(file, "sess");
    }

    public final void a() {
        j.r(this.f54053b);
    }

    public final List b() {
        return CollectionsKt.e(this.f54053b);
    }

    public final File c(String extension) {
        Intrinsics.checkNotNullParameter(extension, "extension");
        this.f54053b.mkdirs();
        File file = this.f54053b;
        UUID randomUUID = UUID.randomUUID();
        return new File(file, randomUUID + "." + extension);
    }

    public final File d(String fileName) {
        Intrinsics.checkNotNullParameter(fileName, "fileName");
        this.f54053b.mkdirs();
        return new File(this.f54053b, fileName);
    }
}
