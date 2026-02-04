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
    private static final Set f49334i = new HashSet(Arrays.asList("encoded_size", "encoded_width", "encoded_height", "uri_source", "image_format", "bitmap_config", "is_rounded", "non_fatal_decode_error", "original_url", "modified_url", "image_color_space"));

    /* renamed from: d  reason: collision with root package name */
    private Map f49335d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private ImageInfo f49336e;

    @Override // y9.a
    public void A0(Map map) {
        if (map != null) {
            for (String str : f49334i) {
                Object obj = map.get(str);
                if (obj != null) {
                    this.f49335d.put(str, obj);
                }
            }
        }
    }

    @Override // y9.a
    public void B(String str, Object obj) {
        if (f49334i.contains(str)) {
            this.f49335d.put(str, obj);
        }
    }

    @Override // sa.e
    public o J1() {
        return n.f49366d;
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49335d;
    }

    @Override // sa.e
    public boolean l2() {
        return false;
    }

    @Override // sa.e
    public ImageInfo z() {
        if (this.f49336e == null) {
            this.f49336e = new m(getWidth(), getHeight(), t(), J1(), getExtras());
        }
        return this.f49336e;
    }
}
