package mg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f38691a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f38692b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f38693c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, ui.d dVar) {
        this.f38691a = map;
        this.f38692b = map2;
        this.f38693c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f38691a, this.f38692b, this.f38693c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
