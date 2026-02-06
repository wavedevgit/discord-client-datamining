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
    private static final Set f49818i = new HashSet(Arrays.asList("encoded_size", "encoded_width", "encoded_height", "uri_source", "image_format", "bitmap_config", "is_rounded", "non_fatal_decode_error", "original_url", "modified_url", "image_color_space"));

    /* renamed from: d  reason: collision with root package name */
    private Map f49819d = new HashMap();

    /* renamed from: e  reason: collision with root package name */
    private ImageInfo f49820e;

    @Override // sa.e
    public ImageInfo E() {
        if (this.f49820e == null) {
            this.f49820e = new m(getWidth(), getHeight(), w(), I1(), getExtras());
        }
        return this.f49820e;
    }

    @Override // sa.e
    public o I1() {
        return n.f49850d;
    }

    @Override // y9.a
    public void J(Map map) {
        if (map != null) {
            for (String str : f49818i) {
                Object obj = map.get(str);
                if (obj != null) {
                    this.f49819d.put(str, obj);
                }
            }
        }
    }

    @Override // sa.l, y9.a
    public Map getExtras() {
        return this.f49819d;
    }

    @Override // sa.e
    public boolean l2() {
        return false;
    }

    @Override // y9.a
    public void p(String str, Object obj) {
        if (f49818i.contains(str)) {
            this.f49819d.put(str, obj);
        }
    }
}
