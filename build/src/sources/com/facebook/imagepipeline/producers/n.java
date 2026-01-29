package com.facebook.imagepipeline.producers;

import android.net.Uri;
import android.util.Base64;
import com.facebook.imagepipeline.request.ImageRequest;
import java.io.ByteArrayInputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class n extends j0 {
    public n(r8.i iVar) {
        super(m8.a.a(), iVar);
    }

    static byte[] g(String str) {
        o8.j.b(Boolean.valueOf(str.substring(0, 5).equals("data:")));
        int indexOf = str.indexOf(44);
        String substring = str.substring(indexOf + 1, str.length());
        if (h(str.substring(0, indexOf))) {
            return Base64.decode(substring, 0);
        }
        String decode = Uri.decode(substring);
        o8.j.g(decode);
        return decode.getBytes();
    }

    static boolean h(String str) {
        if (!str.contains(";")) {
            return false;
        }
        String[] split = str.split(";");
        return split[split.length - 1].equals("base64");
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected sa.k d(ImageRequest imageRequest) {
        byte[] g10 = g(imageRequest.getSourceUri().toString());
        return c(new ByteArrayInputStream(g10), g10.length);
    }

    @Override // com.facebook.imagepipeline.producers.j0
    protected String f() {
        return "DataFetchProducer";
    }
}
