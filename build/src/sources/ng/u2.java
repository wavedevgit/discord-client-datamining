package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f40357a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f40358b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f40359c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, yi.d dVar) {
        this.f40357a = map;
        this.f40358b = map2;
        this.f40359c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f40357a, this.f40358b, this.f40359c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
