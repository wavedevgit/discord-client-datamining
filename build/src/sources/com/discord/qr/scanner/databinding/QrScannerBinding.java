package com.discord.qr.scanner.databinding;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import androidx.annotation.NonNull;
import androidx.viewbinding.ViewBinding;
import com.budiyev.android.codescanner.CodeScannerView;
import com.discord.qr.scanner.R;
import e4.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class QrScannerBinding implements ViewBinding {
    @NonNull
    public final CodeScannerView qrScanner;
    @NonNull
    private final View rootView;

    private QrScannerBinding(@NonNull View view, @NonNull CodeScannerView codeScannerView) {
        this.rootView = view;
        this.qrScanner = codeScannerView;
    }

    @NonNull
    public static QrScannerBinding bind(@NonNull View view) {
        int i10 = R.id.qr_scanner;
        CodeScannerView codeScannerView = (CodeScannerView) a.a(view, i10);
        if (codeScannerView != null) {
            return new QrScannerBinding(view, codeScannerView);
        }
        throw new NullPointerException("Missing required view with ID: ".concat(view.getResources().getResourceName(i10)));
    }

    @NonNull
    public static QrScannerBinding inflate(@NonNull LayoutInflater layoutInflater, @NonNull ViewGroup viewGroup) {
        if (viewGroup != null) {
            layoutInflater.inflate(R.layout.qr_scanner, viewGroup);
            return bind(viewGroup);
        }
        throw new NullPointerException("parent");
    }

    @Override // androidx.viewbinding.ViewBinding
    @NonNull
    public View getRoot() {
        return this.rootView;
    }
}
