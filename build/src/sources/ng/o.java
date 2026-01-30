package ng;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f41506a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f41507b;

    /* renamed from: c  reason: collision with root package name */
    private final ui.d f41508c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, ui.d dVar) {
        this.f41506a = map;
        this.f41507b = map2;
        this.f41508c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f41506a, this.f41507b, this.f41508c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
