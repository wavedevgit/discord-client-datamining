package uf;

import com.google.android.gms.common.d;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class b {

    /* renamed from: a  reason: collision with root package name */
    public static final d f50620a;

    /* renamed from: b  reason: collision with root package name */
    public static final d f50621b;

    /* renamed from: c  reason: collision with root package name */
    public static final d f50622c;

    /* renamed from: d  reason: collision with root package name */
    public static final d f50623d;

    static {
        new d("cancel_target_direct_transfer", 1L);
        new d("delete_credential", 1L);
        new d("delete_device_public_key", 1L);
        new d("get_or_generate_device_public_key", 1L);
        new d("get_passkeys", 1L);
        new d("update_passkey", 1L);
        f50620a = new d("is_user_verifying_platform_authenticator_available_for_credential", 1L);
        f50621b = new d("is_user_verifying_platform_authenticator_available", 1L);
        f50622c = new d("privileged_api_list_credentials", 2L);
        new d("start_target_direct_transfer", 1L);
        new d("first_party_api_get_link_info", 1L);
        new d("zero_party_api_register", 3L);
        new d("zero_party_api_sign", 3L);
        new d("zero_party_api_list_discoverable_credentials", 2L);
        new d("zero_party_api_authenticate_passkey", 3L);
        new d("zero_party_api_register_passkey", 1L);
        new d("zero_party_api_register_passkey_with_sync_account", 1L);
        new d("zero_party_api_get_hybrid_client_registration_pending_intent", 1L);
        new d("zero_party_api_get_hybrid_client_sign_pending_intent", 1L);
        f50623d = new d("get_browser_hybrid_client_sign_pending_intent", 1L);
        new d("get_browser_hybrid_client_registration_pending_intent", 1L);
        new d("privileged_authenticate_passkey", 2L);
        new d("privileged_register_passkey_with_sync_account", 1L);
        new d("zero_party_api_get_privileged_hybrid_client_registration_pending_intent", 1L);
        new d("zero_party_api_get_privileged_hybrid_client_sign_pending_intent", 1L);
        new d("zero_party_api_get_fido_security_key_only_sign_pending_intent", 2L);
        new d("zero_party_api_get_fido_security_key_only_registration_pending_intent", 2L);
        new d("zero_party_api_get_privileged_fido_security_key_only_sign_pending_intent", 2L);
        new d("zero_party_api_get_privileged_fido_security_key_only_registration_pending_intent", 2L);
        new d("zero_party_api_get_hybrid_data_transfer_pending_intent", 1L);
    }
}
