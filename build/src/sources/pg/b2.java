package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43977a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f43978b;

    /* renamed from: c  reason: collision with root package name */
    private final yi.d f43979c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, yi.d dVar) {
        this.f43977a = map;
        this.f43978b = map2;
        this.f43979c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f43977a, this.f43978b, this.f43979c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
