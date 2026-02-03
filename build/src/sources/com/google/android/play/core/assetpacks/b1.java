package com.google.android.play.core.assetpacks;

import android.os.Bundle;
import androidx.work.b;
import com.discord.js_watchdog.SharedPreferencesKey;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class b1 {
    /* JADX INFO: Access modifiers changed from: package-private */
    public static Bundle a(androidx.work.b bVar) {
        Bundle bundle;
        z0 z0Var = new z0("notification_bundle:", bVar, null);
        d(z0Var);
        bundle = z0Var.f16755c;
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Bundle b(androidx.work.b bVar) {
        Bundle bundle;
        z0 z0Var = new z0("session_bundle:", bVar, null);
        e(z0Var);
        bundle = z0Var.f16755c;
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static androidx.work.b c(Bundle bundle, Bundle bundle2) {
        b.a aVar = new b.a();
        aVar.h("BUNDLE_DATA_CONVERTER_VERSION", "1.0");
        e(new w0("session_bundle:", bundle, aVar, null));
        d(new w0("notification_bundle:", bundle2, aVar, null));
        return aVar.a();
    }

    private static void d(y0 y0Var) {
        y0Var.a("notification_channel_name");
        y0Var.a("notification_title");
        y0Var.a("notification_subtext");
        y0Var.e("notification_color");
        y0Var.d("notification_timeout", 600000L);
        y0Var.f("notification_intent_reconstruct_from_data");
        y0Var.a("notification_intent_component_class_name");
        y0Var.a("notification_intent_component_package_name");
        y0Var.a("notification_intent_package");
        y0Var.a("notification_intent_action");
        y0Var.a("notification_intent_data");
        y0Var.e("notification_intent_flags");
        y0Var.a("notification_intent_extra_error_dialog_document_id");
    }

    private static void e(y0 y0Var) {
        y0Var.e(SharedPreferencesKey.SESSION_ID);
        y0Var.e("app_version_code");
        for (String str : y0Var.g("pack_names")) {
            y0Var.b(uh.b.a("pack_version", str));
            y0Var.a(uh.b.a("pack_version_tag", str));
            y0Var.e(uh.b.a("status", str));
            y0Var.b(uh.b.a("total_bytes_to_download", str));
            for (String str2 : y0Var.g(uh.b.a("slice_ids", str))) {
                y0Var.c(uh.b.b("chunk_intents", str, str2));
                y0Var.a(uh.b.b("uncompressed_hash_sha256", str, str2));
                y0Var.b(uh.b.b("uncompressed_size", str, str2));
                y0Var.e(uh.b.b("patch_format", str, str2));
                y0Var.e(uh.b.b("compression_format", str, str2));
            }
        }
    }
}
