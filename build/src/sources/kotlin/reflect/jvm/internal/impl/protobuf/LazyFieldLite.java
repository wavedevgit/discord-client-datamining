package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f35250a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f35251b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f35252c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f35253d;

    protected void a(MessageLite messageLite) {
        if (this.f35253d == null) {
            synchronized (this) {
                if (this.f35253d != null) {
                    return;
                }
                try {
                    if (this.f35250a != null) {
                        this.f35253d = messageLite.getParserForType().parseFrom(this.f35250a, this.f35251b);
                    } else {
                        this.f35253d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f35252c) {
            return this.f35253d.getSerializedSize();
        }
        return this.f35250a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f35253d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f35253d;
        this.f35253d = messageLite;
        this.f35250a = null;
        this.f35252c = true;
        return messageLite2;
    }
}
