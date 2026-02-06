package kotlin.reflect.jvm.internal.impl.protobuf;

import java.io.IOException;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class LazyFieldLite {

    /* renamed from: a  reason: collision with root package name */
    private ByteString f33960a;

    /* renamed from: b  reason: collision with root package name */
    private ExtensionRegistryLite f33961b;

    /* renamed from: c  reason: collision with root package name */
    private volatile boolean f33962c;

    /* renamed from: d  reason: collision with root package name */
    protected volatile MessageLite f33963d;

    protected void a(MessageLite messageLite) {
        if (this.f33963d == null) {
            synchronized (this) {
                if (this.f33963d != null) {
                    return;
                }
                try {
                    if (this.f33960a != null) {
                        this.f33963d = messageLite.getParserForType().parseFrom(this.f33960a, this.f33961b);
                    } else {
                        this.f33963d = messageLite;
                    }
                } catch (IOException unused) {
                }
            }
        }
    }

    public int getSerializedSize() {
        if (this.f33962c) {
            return this.f33963d.getSerializedSize();
        }
        return this.f33960a.size();
    }

    public MessageLite getValue(MessageLite messageLite) {
        a(messageLite);
        return this.f33963d;
    }

    public MessageLite setValue(MessageLite messageLite) {
        MessageLite messageLite2 = this.f33963d;
        this.f33963d = messageLite;
        this.f33960a = null;
        this.f33962c = true;
        return messageLite2;
    }
}
