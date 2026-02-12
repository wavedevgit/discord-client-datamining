package pq;

import android.widget.TextView;
import com.google.android.material.textfield.TextInputLayout;
import com.withpersona.sdk2.inquiry.shared.ui.ButtonWithLoadingIndicator;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final TextInputLayout f42912a;

    /* renamed from: b  reason: collision with root package name */
    private final TextInputLayout f42913b;

    /* renamed from: c  reason: collision with root package name */
    private final sq.f f42914c;

    /* renamed from: d  reason: collision with root package name */
    private final sq.f f42915d;

    /* renamed from: e  reason: collision with root package name */
    private final ButtonWithLoadingIndicator f42916e;

    /* renamed from: f  reason: collision with root package name */
    private final TextView f42917f;

    public d0(TextInputLayout cardAccessNumber, TextInputLayout documentNumber, sq.f dateOfBirthBinding, sq.f expirationDateBinding, ButtonWithLoadingIndicator launchButton, TextView errorLabel) {
        Intrinsics.checkNotNullParameter(cardAccessNumber, "cardAccessNumber");
        Intrinsics.checkNotNullParameter(documentNumber, "documentNumber");
        Intrinsics.checkNotNullParameter(dateOfBirthBinding, "dateOfBirthBinding");
        Intrinsics.checkNotNullParameter(expirationDateBinding, "expirationDateBinding");
        Intrinsics.checkNotNullParameter(launchButton, "launchButton");
        Intrinsics.checkNotNullParameter(errorLabel, "errorLabel");
        this.f42912a = cardAccessNumber;
        this.f42913b = documentNumber;
        this.f42914c = dateOfBirthBinding;
        this.f42915d = expirationDateBinding;
        this.f42916e = launchButton;
        this.f42917f = errorLabel;
    }

    public final TextInputLayout a() {
        return this.f42912a;
    }

    public final sq.f b() {
        return this.f42914c;
    }

    public final TextInputLayout c() {
        return this.f42913b;
    }

    public final TextView d() {
        return this.f42917f;
    }

    public final sq.f e() {
        return this.f42915d;
    }

    public final ButtonWithLoadingIndicator f() {
        return this.f42916e;
    }
}
