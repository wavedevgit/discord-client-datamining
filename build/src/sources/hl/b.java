package hl;

import android.view.View;
import android.widget.LinearLayout;
import com.henninghall.date_picker.k;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class b {

    /* renamed from: a  reason: collision with root package name */
    private final LinearLayout f26180a;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b(View view) {
        LinearLayout linearLayout = (LinearLayout) view.findViewById(k.f16668h);
        this.f26180a = linearLayout;
        linearLayout.setWillNotDraw(false);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void a(View view) {
        this.f26180a.addView(view);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void b() {
        this.f26180a.removeAllViews();
    }
}
