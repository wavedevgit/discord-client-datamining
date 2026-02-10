package rg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f48199a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f48200b;

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f48201c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f2(Map map, Map map2, zi.d dVar) {
        this.f48199a = map;
        this.f48200b = map2;
        this.f48201c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new b2(byteArrayOutputStream, this.f48199a, this.f48200b, this.f48201c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
