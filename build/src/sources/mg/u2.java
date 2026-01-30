package mg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f38707a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f38708b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f38709c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, ui.d dVar) {
        this.f38707a = map;
        this.f38708b = map2;
        this.f38709c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f38707a, this.f38708b, this.f38709c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
