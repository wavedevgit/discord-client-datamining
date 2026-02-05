package sa;

import com.facebook.imagepipeline.image.ImageInfo;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a implements e {

    /* renamed from: i  reason: collision with root package name */
    private static final Set f49483i = new HashSet(Arrays.asList("encoded_size", "encoded_width", "encoded_height", "uri_source", "image_format", "bitmap_config", "is_rounded", "non_fatal_decode_error", "original_url", "modified_url", "image_color_space"));

    /* renamed from: d  reason: collision with root package name */
    private Map f49484d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private ImageInfo f49485e;

    @Override // sa.e
    public ImageInfo A() {
        if (this.f49485e == null) {
            this.f49485e = new m(getWidth(), getHeight(), u(), J1(), getExtras());
        }
        return this.f49485e;
    }

    @Override // sa.e
    public o J1() {
        return n.f49515d;
    }

    @Override // y9.a
    public void W(Map map) {
        if (map != null) {
            for (String str : f49483i) {
                Object obj = map.get(str);
                if (obj != null) {
                    this.f49484d.put(str, obj);
                }
            }
        }
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49484d;
    }

    @Override // sa.e
    public boolean l2() {
        return false;
    }

    @Override // y9.a
    public void y(String str, Object obj) {
        if (f49483i.contains(str)) {
            this.f49484d.put(str, obj);
        }
    }
}
