package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f41369a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41370b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41371c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, ui.d dVar) {
        this.f41369a = map;
        this.f41370b = map2;
        this.f41371c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f41369a, this.f41370b, this.f41371c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
