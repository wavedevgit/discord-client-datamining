package yp;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f54895a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f54896b;

    /* renamed from: c  reason: collision with root package name */
    private final bq.f f54897c;

    /* renamed from: d  reason: collision with root package name */
    private final bq.f f54898d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f54899e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f54900f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, bq.f dateOfBirthBinding, bq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f54895a = cardAccessNumber;
        this.f54896b = documentNumber;
        this.f54897c = dateOfBirthBinding;
        this.f54898d = expirationDateBinding;
        this.f54899e = launchButton;
        this.f54900f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f54895a;
    }

    public final bq.f b() {
        return this.f54897c;
    }

    public final TextInputLayout c() {
        return this.f54896b;
    }

    public final TextView d() {
        return this.f54900f;
    }

    public final bq.f e() {
        return this.f54898d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f54899e;
    }
}
