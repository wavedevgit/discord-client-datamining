package ji;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class j implements k {
    @Override // ji.k
    public final boolean a(Object obj, File file, File file2) {
        return new File((String) d0.g(obj.getClass(), "optimizedPathFor", String.class, File.class, file, File.class, file2)).exists();
    }
}
