package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f41382a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41383b;

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f41384c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, zi.d dVar) {
        this.f41382a = map;
        this.f41383b = map2;
        this.f41384c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f41382a, this.f41383b, this.f41384c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
