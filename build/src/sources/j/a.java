package j;

import android.content.Context;
import android.graphics.Rect;
import android.text.method.TransformationMethod;
import android.view.View;
import java.util.Locale;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a implements TransformationMethod {

    /* renamed from: d  reason: collision with root package name */
    private Locale f31691d;

    public a(Context context) {
        this.f31691d = context.getResources().getConfiguration().locale;
    }

    @Override // android.text.method.TransformationMethod
    public CharSequence getTransformation(CharSequence charSequence, View view) {
        if (charSequence != null) {
            return charSequence.toString().toUpperCase(this.f31691d);
        }
        return null;
    }

    @Override // android.text.method.TransformationMethod
    public void onFocusChanged(View view, CharSequence charSequence, boolean z10, int i10, Rect rect) {
    }
}
