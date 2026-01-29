package r1;

import android.graphics.Typeface;
import android.graphics.fonts.Font;
import android.text.TextUtils;
import android.util.Log;
import java.io.IOException;
import z1.g;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q extends p {
    private static Typeface o(String str) {
        Typeface create = Typeface.create(str, 0);
        Typeface create2 = Typeface.create(Typeface.DEFAULT, 0);
        if (create != null && !create.equals(create2)) {
            return create;
        }
        return null;
    }

    @Override // r1.p
    protected Font m(g.b bVar) {
        Typeface o10;
        Font j10;
        String c10 = bVar.c();
        if (c10 == null || (o10 = o(c10)) == null || (j10 = k.j(o10)) == null) {
            return null;
        }
        if (TextUtils.isEmpty(bVar.f())) {
            return j10;
        }
        try {
            return new Font.Builder(j10).setFontVariationSettings(bVar.f()).build();
        } catch (IOException unused) {
            Log.e("TypefaceCompatApi31Impl", "Failed to clone Font instance. Fall back to provider font.");
            return null;
        }
    }
}
