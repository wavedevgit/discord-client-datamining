package androidx.appcompat.widget;

import android.view.textclassifier.TextClassificationManager;
import android.view.textclassifier.TextClassifier;
import android.widget.TextView;
import androidx.annotation.NonNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class AppCompatTextClassifierHelper {

    /* renamed from: a  reason: collision with root package name */
    private TextView f1481a;

    /* renamed from: b  reason: collision with root package name */
    private TextClassifier f1482b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    private static final class a {
        @NonNull
        static TextClassifier a(@NonNull TextView textView) {
            TextClassificationManager textClassificationManager = (TextClassificationManager) textView.getContext().getSystemService(TextClassificationManager.class);
            if (textClassificationManager != null) {
                return textClassificationManager.getTextClassifier();
            }
            return TextClassifier.NO_OP;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public AppCompatTextClassifierHelper(TextView textView) {
        this.f1481a = (TextView) b2.e.g(textView);
    }

    public TextClassifier a() {
        TextClassifier textClassifier = this.f1482b;
        if (textClassifier == null) {
            return a.a(this.f1481a);
        }
        return textClassifier;
    }

    public void b(TextClassifier textClassifier) {
        this.f1482b = textClassifier;
    }
}
